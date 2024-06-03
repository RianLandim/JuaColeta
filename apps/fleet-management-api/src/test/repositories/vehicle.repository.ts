import { Vehicle } from '@app/entities/vehicle';
import { VehicleRepository } from '@app/repositories/vehicle.repository';

export class InMemoryVehicleRepository implements VehicleRepository {
  private vehicle: Vehicle[] = [];

  async create(vehicle: Vehicle): Promise<void> {
    this.vehicle.push(vehicle);
  }

  async list(companyId: string): Promise<Vehicle[]> {
    const vehicles = this.vehicle.filter((v) => v.companyId === companyId);

    return vehicles;
  }

  async delete(vehicleId: string): Promise<void> {
    throw new Error('method not implemented yet');
  }
}
