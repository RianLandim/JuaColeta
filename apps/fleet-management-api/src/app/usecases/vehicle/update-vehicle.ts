import { Vehicle } from '@app/entities/vehicle';
import { VehicleRepository } from '@app/repositories/vehicle.repository';
import { UpdateVehicleDTO } from '@infra/http/dtos/update-vehicle.dto';
import { Injectable } from '@nestjs/common';

@Injectable()
export class UpdateVehicle {
  constructor(private vehicleRepository: VehicleRepository) {}

  async execute(request: UpdateVehicleDTO) {
    const vehicle = new Vehicle(request, request.id);

    await this.vehicleRepository.update(vehicle);
  }
}
