import { VehicleRepository } from '@app/repositories/vehicle.repository';
import { Injectable } from '@nestjs/common';

@Injectable()
export class ListVehicleById {
  constructor(private vehicleRepository: VehicleRepository) {}

  async execute(id: string) {
    const vehicles = await this.vehicleRepository.listById(id);

    return vehicles;
  }
}
