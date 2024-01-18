import { VehicleRepository } from '@app/repositories/vehicle.repository';
import { Injectable } from '@nestjs/common';

interface VehicleListRequestProps {
  companyId: string;
}

@Injectable()
export class ListVehicle {
  constructor(private vehicleRepository: VehicleRepository) {}

  async execute({ companyId }: VehicleListRequestProps) {
    const vehicles = await this.vehicleRepository.list(companyId);

    return vehicles;
  }
}
