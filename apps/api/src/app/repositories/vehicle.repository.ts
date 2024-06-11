import { Vehicle } from '@app/entities/vehicle';
import { UpdateVehicleDTO } from '@infra/http/dtos/update-vehicle.dto';

export abstract class VehicleRepository {
  abstract create(vehicle: Vehicle): Promise<void>;
  abstract update(vehicle: UpdateVehicleDTO): Promise<void>;
  abstract list(companyId: string): Promise<Vehicle[]>;
  abstract listById(id: string): Promise<Vehicle>;
  abstract delete(vehicleId: string): Promise<void>;
}
