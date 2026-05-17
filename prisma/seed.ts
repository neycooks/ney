import { PrismaClient } from '@prisma/client';
import bcrypt from 'bcryptjs';

const prisma = new PrismaClient();

async function main() {
  const username = process.env.ADMIN_USERNAME || 'admin';
  const password = process.env.ADMIN_PASSWORD || 'admin';

  const existing = await prisma.user.findUnique({ where: { username } });
  if (!existing) {
    const hashed = await bcrypt.hash(password, 12);
    await prisma.user.create({
      data: { username, password: hashed, isAdmin: true },
    });
    console.log(`Admin user created: ${username}`);
  } else {
    console.log('Admin user already exists');
  }
}

main()
  .catch(console.error)
  .finally(() => prisma.$disconnect());
