import { Address } from '@app/entities/address';
import { faker } from '@faker-js/faker';

type Override = Partial<Address>;

export function makeAddress(override?: Override) {
  return new Address({
    city: faker.location.city(),
    country: faker.location.country(),
    district: faker.location.county(),
    number: faker.number.int({ max: 32 }),
    state: faker.location.state(),
    street: faker.location.street(),
    zipCode: faker.location.zipCode('#####-###'),
    ...override,
  });
}
