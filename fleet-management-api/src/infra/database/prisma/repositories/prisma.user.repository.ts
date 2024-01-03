import { UserRepository } from '@app/repositories/user.repository';
import {
  BadRequestException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { PrismaService } from '../prisma.service';
import { User } from '@app/entities/user';
import { PrismaUserMapper } from '../mappers/prisma.user.mapper';

@Injectable()
export class PrismaUserRepository implements UserRepository {
  constructor(private prisma: PrismaService) {}

  async create(user: User): Promise<void> {
    const alreadyUser = await this.prisma.user.findFirst({
      where: {
        email: user.email,
      },
    });

    if (alreadyUser) {
      throw new BadRequestException('Usuário já cadastrado');
    }

    const data = PrismaUserMapper.toPrisma(user);

    await this.prisma.user.create({
      data,
    });
  }

  async findByEmail(email: string): Promise<User> {
    const prismaUser = await this.prisma.user.findUnique({
      where: {
        email,
      },
    });

    if (!prismaUser) {
      throw new NotFoundException('Usuário não encontrado');
    }

    const user = new User(prismaUser);

    return user;
  }
}
