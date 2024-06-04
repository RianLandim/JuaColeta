import { InMemoryVehicleRepository } from '@test/repositories/vehicle.repository';
import { CreateVehicle } from './add-vehicle.usecase';
import { makeVehicle } from '@test/factories/vehicle.factory';

describe('Create Vehicle [usecase]', () => {
  const vehicleRepository = new InMemoryVehicleRepository();
  const createVehicle = new CreateVehicle(vehicleRepository);

  it('Should be able to create an vehicle', async () => {
    const vehicle = makeVehicle();

    expect(async () => await createVehicle.execute(vehicle)).not.toThrow();
  });
});
