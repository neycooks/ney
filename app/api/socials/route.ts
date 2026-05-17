import { NextRequest, NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';
import { getSession } from '@/lib/auth';

export async function GET() {
  const socials = await prisma.social.findMany({ orderBy: { createdAt: 'asc' } });
  return NextResponse.json(socials);
}

export async function POST(req: NextRequest) {
  const session = await getSession();
  if (!session?.isAdmin) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });

  const { name, url, description, icon } = await req.json();
  const social = await prisma.social.create({ data: { name, url, description, icon } });
  return NextResponse.json(social);
}

export async function DELETE(req: NextRequest) {
  const session = await getSession();
  if (!session?.isAdmin) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });

  const { id } = await req.json();
  await prisma.social.delete({ where: { id } });
  return NextResponse.json({ success: true });
}
