import { InMemoryCompanyRepository } from '@test/repositories/company.repository';
import { CreateCompany } from './create-company.usecase';
import { makeCompany } from '@test/factories/company.factory';
import { fakerPT_BR as faker } from '@faker-js/faker';

describe('Create Vehicle [usecase]', () => {
  const companyRepository = new InMemoryCompanyRepository();
  const createCompany = new CreateCompany(companyRepository);

  it('should be able to create an Vehicle', async () => {
    const company = makeCompany();

    expect(
      async () =>
        await createCompany.execute({
          address: company.address,
          cnpj: company.cnpj,
          socialName: company.socialName,
          email: faker.internet.email(),
        }),
    ).not.toThrow();
  });
});
