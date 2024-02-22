import { InMemoryVehicleRepository } from '@test/repositories/vehicle.repository';
import { ListVehicle } from './list-vehicle.usecase';
import { makeVehicle } from '@test/factories/vehicle.factory';
import { createId } from '@paralleldrive/cuid2';
import { Vehicle } from '@app/entities/vehicle';

describe('list vehicle [usecase]', () => {
  const vehicleRepository = new InMemoryVehicleRepository();
  const listVehicle = new ListVehicle(vehicleRepository);

  it('should be able to see all vehicles', async () => {
    const companyId = createId();

    const vehicle = makeVehicle({
      companyId,
    });

    await vehicleRepository.create(vehicle);

    const vehicles = await listVehicle.execute({
      companyId,
    });

    expect(vehicles.map((v) => v instanceof Vehicle)).toBeTruthy();
  });
});
