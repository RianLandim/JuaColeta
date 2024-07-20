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

  const company = await prisma.company.upsert({
    where: {
      cnpj: '32707269000107',
    },
    update: {},
    create: {
      id: createId(),
      cnpj: '32707269000107',
      socialName: 'Landim`s dev',
      address: {
        create: {
          id: createId(),
          city: 'Barbalha',
          country: 'Brasil',
          district: 'Centro',
          number: 173,
          state: 'Ceará',
          street: 'Avenida Costa Cavalcante',
          zipCode: '63090001',
        },
      },
    },
  });

  console.log({ admin, company });
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
