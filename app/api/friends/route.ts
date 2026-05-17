import { NextRequest, NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';
import { getSession } from '@/lib/auth';
import { put } from '@vercel/blob';

export async function GET() {
  const friends = await prisma.friend.findMany({ orderBy: { createdAt: 'asc' } });
  return NextResponse.json(friends);
}

export async function POST(req: NextRequest) {
  const session = await getSession();
  if (!session?.isAdmin) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });

  const formData = await req.formData();
  const name = formData.get('name') as string;
  const description = formData.get('description') as string;
  const file = formData.get('pfp') as File;

  if (!file) return NextResponse.json({ error: 'No file uploaded' }, { status: 400 });

  const blob = await put(`friends/${file.name}`, file, { access: 'public' });

  const friend = await prisma.friend.create({
    data: { name, description, pfpUrl: blob.url },
  });
  return NextResponse.json(friend);
}

export async function DELETE(req: NextRequest) {
  const session = await getSession();
  if (!session?.isAdmin) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });

  const { id } = await req.json();
  await prisma.friend.delete({ where: { id } });
  return NextResponse.json({ success: true });
}
