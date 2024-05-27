import { UserRepository } from '@app/repositories/user.repository';
import {
  BadRequestException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { PrismaService } from '../prisma.service';
import { User } from '@app/entities/user';
import { PrismaUserMapper } from '../mappers/prisma.user.mapper';
import { Vehicle } from '@app/entities/vehicle';

@Injectable()
export class PrismaUserRepository implements UserRepository {
  constructor(private prisma: PrismaService) {}

  async create(user: User, companyId?: string): Promise<void> {
    const alreadyUser = await this.prisma.user.findFirst({
      where: {
        email: user.email,
      },
    });

    if (alreadyUser) {
      throw new BadRequestException('Usuário já cadastrado');
    }

    const data = PrismaUserMapper.toPrisma(user, companyId);

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

    const user = new User(prismaUser, prismaUser.id);

    return user;
  }

  async find() {
    const rawUsers = await this.prisma.user.findMany();

    const users = rawUsers.map((user) => new User(user, user.id));

    return users;
  }

  async findById(id: string) {
    const rawUser = await this.prisma.user.findUnique({
      where: {
        id,
      },
    });

    if (!rawUser) {
      throw new NotFoundException('Usuário não encontrado');
    }

    const user = new User(rawUser, rawUser.id);

    return user;
  }

  async findUsersWithVehicle(): Promise<User[]> {
    const rawUser = await this.prisma.user.findMany({
      where: {
        role: 'DRIVER',
      },
      include: {
        Vehicle: true,
      },
    });

    const users = rawUser.map((user) => {
      const vehicle = new Vehicle(user.Vehicle[0], user.Vehicle[0].id);

      return new User({ ...user, vehicle: vehicle ?? undefined }, user.id);
    });

    return users;
  }
}
