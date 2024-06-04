import { Vehicle } from '@app/entities/vehicle';
import { Prisma } from '@prisma/client';

export class PrismaVehicleMapper {
  static toPrisma(vehicle: Vehicle): Prisma.VehicleCreateInput {
    return {
      id: vehicle.id,
      isSecured: vehicle.isSecured,
      model: vehicle.model,
      plate: vehicle.plate,
      year: vehicle.year,
      renavam: vehicle.renavam,
      fabricator: vehicle.fabricator,
      category: vehicle.category,
      color: vehicle.color,
      company: {
        connect: {
          id: vehicle.companyId,
        },
      },
    };
  }
}
