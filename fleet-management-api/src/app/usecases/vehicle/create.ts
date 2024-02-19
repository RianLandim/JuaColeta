import {
  Vehicle,
  type VehicleProps as CreateVehicleProps,
} from '@app/entities/vehicle';
import { VehicleRepository } from '@app/repositories/vehicle.repository';
import { Injectable } from '@nestjs/common';

@Injectable()
export class CreateVehicle {
  constructor(private vehicleRepository: VehicleRepository) {}

  async execute(request: CreateVehicleProps) {
    const vehicle = new Vehicle(request);

    await this.vehicleRepository.create(vehicle);
  }
}
