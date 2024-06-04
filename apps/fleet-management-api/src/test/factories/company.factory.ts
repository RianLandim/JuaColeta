import { Company } from '@app/entities/company';
import { fakerPT_BR as faker } from '@faker-js/faker';
import { makeAddress } from './address.factory';

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
  const address = makeAddress();

  return new Company({
    socialName: faker.company.name(),
    cnpj: fakerCNPJ(),
    addressId: address.id,
    address,
    ...override,
  });
}
