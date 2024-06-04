import { VehicleRepository } from '@app/repositories/vehicle.repository';
import { Injectable } from '@nestjs/common';

@Injectable()
export class DeleteVehicle {
  constructor(private vehicleRepository: VehicleRepository) {}

  async execute(vehicleId: string) {
    return await this.vehicleRepository.delete(vehicleId);
  }
}
