import { Vehicle } from '@app/entities/vehicle';

export abstract class VehicleRepository {
  abstract create(vehicle: Vehicle): Promise<void>;
  abstract list(companyId: string): Promise<Vehicle[]>;
  abstract delete(vehicleId: string): Promise<void>;
}
