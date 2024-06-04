import { createId } from '@paralleldrive/cuid2';
import { PrismaClient } from '@prisma/client';
import { hashSync } from 'bcrypt';
const prisma = new PrismaClient();
async function main() {
  const admin = await prisma.user.upsert({
    where: { email: 'admin@gmail.com' },
    update: {},
    create: {
      id: createId(),
      email: 'admin@gmail.com',
      name: 'Admin',
      role: 'ADMIN',
      cellphone: '88999999999',
      password: hashSync('teste123', 8),
    },
  });

  console.log({ admin });
}
main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
