import { User } from '@app/entities/user';
import { Prisma } from '@prisma/client';

export class PrismaUserMapper {
  static toPrisma(user: User, companyId?: string): Prisma.UserCreateInput {
    return {
      id: user.id,
      cellphone: user.cellphone,
      email: user.email,
      name: user.name,
      password: user.password,
      createdAt: user.createdAt,
      license: user.license,
      role: user.role,
      updatedAt: user.updatedAt,
      Company: {
        connect: {
          id: companyId,
        },
      },
    };
  }
}
