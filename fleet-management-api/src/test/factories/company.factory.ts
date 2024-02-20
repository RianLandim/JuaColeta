import { Address } from '@app/entities/address';
import { Company } from '@app/entities/company';
import { fakerPT_BR as faker } from '@faker-js/faker';

type Override = Partial<Company>;

export const fakerCNPJ = () =>
  faker.helpers.fake(
    `${faker.string.numeric(3)}.${faker.string.numeric(
      3,
    )}.${faker.string.numeric(3)}/${faker.string.numeric(
      5,
    )}-${faker.string.numeric(2)}`,
  );

export function makeCompany(override?: Override) {
  const address = new Address({
    city: faker.location.city(),
    country: faker.location.country(),
    district: faker.location.county(),
    number: faker.number.int(),
    state: faker.location.state(),
    street: faker.location.street(),
    zipCode: faker.location.zipCode('#####-###'),
  });

  return new Company({
    socialName: faker.company.name(),
    cnpj: fakerCNPJ(),
    addressId: faker.string.nanoid(),
    address: address,
    ...override,
  });
}
