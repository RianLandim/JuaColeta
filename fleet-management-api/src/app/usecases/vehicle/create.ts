import { Vehicle } from '@app/entities/vehicle';
import { VehicleRepository } from '@app/repositories/vehicle.repository';
import { Injectable } from '@nestjs/common';
import { VehicleCategoryProps } from '@utils/enum/vehicle-category.enum';

interface CreateVehicleProps {
  model: string;
  fabricator: string;
  plate: string;
  color: string;
  year: string;
  renavam: string;
  category: VehicleCategoryProps;
  isSecured: boolean;
  companyId: string;
}

@Injectable()
export class CreateVehicle {
  constructor(private vehicleRepository: VehicleRepository) {}

  async execute(request: CreateVehicleProps) {
    const vehicle = new Vehicle(request);

    await this.vehicleRepository.create(vehicle);
  }
}
