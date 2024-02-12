import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma.service';
import { RouteRepository } from '@app/repositories/route.repository';
import { Route } from '@app/entities/route';
import { PrismaRouteMapper } from '../mappers/prisma.route.mapper';

@Injectable()
export class PrismaRouteRepository implements RouteRepository {
  constructor(private prisma: PrismaService) {}

  async create(route: Route): Promise<void> {
    const rawRoute = PrismaRouteMapper.toPrisma(route);

    await this.prisma.route.create({
      data: rawRoute,
    });
  }

  async listById(id: string): Promise<Route> {
    const prismaRoute = await this.prisma.route.findFirst({
      where: {
        OR: [{ id }, { externalId: id }],
      },
    });

    const route = new Route(prismaRoute);

    return route;
  }
}
