import { Vehicle } from '@app/entities/vehicle';
import { fakerPT_BR as faker } from '@faker-js/faker';
import { createId } from '@paralleldrive/cuid2';

type Override = Partial<Vehicle>;

export function makeVehicle(override?: Override) {
  return new Vehicle({
    category: 'B',
    color: faker.vehicle.color(),
    fabricator: faker.vehicle.manufacturer(),
    isSecured: true,
    model: faker.vehicle.model(),
    plate: faker.vehicle.vrm(),
    renavam: faker.vehicle.vin(),
    year: '2020',
    companyId: createId(),
    ...override,
  });
}
