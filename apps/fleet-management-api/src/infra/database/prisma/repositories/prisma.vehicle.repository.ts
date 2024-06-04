import { VehicleRepository } from '@app/repositories/vehicle.repository';
import { PrismaService } from '../prisma.service';
import { Vehicle } from '@app/entities/vehicle';
import { PrismaVehicleMapper } from '../mappers/prisma.vehicle.mapper';
import { Injectable } from '@nestjs/common';

@Injectable()
export class PrismaVehicleRepository implements VehicleRepository {
  constructor(private prisma: PrismaService) {}

  async create(vehicle: Vehicle): Promise<void> {
    const rawVehicle = PrismaVehicleMapper.toPrisma(vehicle);

    await this.prisma.vehicle.create({
      data: rawVehicle,
    });
  }

  async list(companyId: string): Promise<Vehicle[]> {
    const prismaVehicles = await this.prisma.vehicle.findMany({
      where: { companyId, status: 'ACTIVE' },
    });

    const vehicles = prismaVehicles.map(
      (vehicle) => new Vehicle(vehicle, vehicle.id),
    );

    return vehicles;
  }

  async listById(id: string): Promise<Vehicle> {
    const prismaVehicle = await this.prisma.vehicle.findUnique({
      where: { id },
    });

    const vehicle = new Vehicle(prismaVehicle, prismaVehicle.id);

    return vehicle;
  }

  async update({ id, ...vehicle }: Vehicle) {
    await this.prisma.vehicle.update({
      where: {
        id: id,
      },
      data: {
        ...vehicle,
      },
    });
  }

  async delete(vehicleId: string) {
    await this.prisma.vehicle.update({
      where: { id: vehicleId },
      data: {
        status: 'INACTIVE',
      },
    });
  }
}
