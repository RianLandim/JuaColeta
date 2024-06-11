import { Vehicle } from '@app/entities/vehicle';

export class VehicleViewModel {
  static toHttp(vehicle: Vehicle) {
    return {
      id: vehicle.id,
      model: vehicle.model,
      fabricator: vehicle.fabricator,
      plate: vehicle.plate,
      color: vehicle.color,
      year: vehicle.year,
      renavam: vehicle.renavam,
      category: vehicle.category,
      averageConsume: vehicle.averageConsume,
      capacity: vehicle.capacity,
      isSecured: vehicle.isSecured,
      companyId: vehicle.companyId,
      createdAt: vehicle.createdAt,
      updatedAt: vehicle.updatedAt,
    };
  }
}
