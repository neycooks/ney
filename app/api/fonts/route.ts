import { NextRequest, NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';
import { getSession } from '@/lib/auth';
import { put } from '@vercel/blob';

export async function GET() {
  const fonts = await prisma.font.findMany({ orderBy: { createdAt: 'asc' } });
  return NextResponse.json(fonts);
}

export async function POST(req: NextRequest) {
  const session = await getSession();
  if (!session?.isAdmin) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });

  const formData = await req.formData();
  const name = formData.get('name') as string;
  const description = formData.get('description') as string;
  const files = formData.getAll('files') as File[];

  if (!files.length) return NextResponse.json({ error: 'No files uploaded' }, { status: 400 });

  const uploadedFiles = [];
  for (const file of files) {
    const blob = await put(`fonts/${file.name}`, file, { access: 'public' });
    uploadedFiles.push({ name: file.name, url: blob.url, type: file.type || file.name.split('.').pop() });
  }

  const font = await prisma.font.create({
    data: { name, description, files: uploadedFiles as any },
  });
  return NextResponse.json(font);
}

export async function DELETE(req: NextRequest) {
  const session = await getSession();
  if (!session?.isAdmin) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });

  const { id } = await req.json();
  await prisma.font.delete({ where: { id } });
  return NextResponse.json({ success: true });
}
