import { Route } from '@app/entities/route';
import { Prisma } from '@prisma/client';

export class PrismaRouteMapper {
  static toPrisma(route: Route): Prisma.RouteCreateInput {
    return {
      id: route.id,
      externalId: route.externalId,
      distance: route.distance,
      duration: route.duration,
      endPointLat: route.endPointLat,
      endPointLon: route.endPointLon,
      startPointLat: route.startPointLat,
      startPointLon: route.startPointLon,
      createdAt: route.createdAt,
      updatedAt: route.updatedAt,
      vehicle: {
        connect: {
          id: route.vehicleId,
        },
      },
    };
  }
}
