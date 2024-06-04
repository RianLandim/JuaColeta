import { Vehicle } from '@app/entities/vehicle';
import { VehicleRepository } from '@app/repositories/vehicle.repository';
import { UpdateVehicleDTO } from '@infra/http/dtos/update-vehicle.dto';

export class InMemoryVehicleRepository implements VehicleRepository {
  private vehicle: Vehicle[] = [];

  async create(vehicle: Vehicle): Promise<void> {
    this.vehicle.push(vehicle);
  }

  async list(companyId: string): Promise<Vehicle[]> {
    const vehicles = this.vehicle.filter((v) => v.companyId === companyId);

    return vehicles;
  }

  async listById(id: string): Promise<Vehicle> {
    const vehicle = this.vehicle.find((v) => v.id === id);

    return vehicle;
  }

  async update(vehicle: UpdateVehicleDTO): Promise<void> {
    throw new Error('method not implemented yet');
  }

  async delete(vehicleId: string): Promise<void> {
    throw new Error('method not implemented yet');
  }
}
