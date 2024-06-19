import { Company } from '@app/entities/company';
import { ListCompany } from './get-company.usecase';
import { InMemoryCompanyRepository } from '@test/repositories/company.repository';
import { makeCompany } from '@test/factories/company.factory';

describe('List Company [usecase]', () => {
  const companyRepository = new InMemoryCompanyRepository();
  const listCompany = new ListCompany(companyRepository);

  it('should be able to list all companies', async () => {
    const { companies } = await listCompany.execute();

    expect(companies.every((c) => c instanceof Company)).toBeTruthy();
  });

  it('should return an empty array if query param not match any stored company', async () => {
    const company = makeCompany();

    await companyRepository.addCompany(company);
    await companyRepository.addCompany(makeCompany());

    const storedCompany = await listCompany.execute({
      socialName: 'teste',
    });

    expect(storedCompany.companies.length).not.toEqual(1);
  });

  it('should be able get company based on social name param', async () => {
    const company = makeCompany();

    await companyRepository.addCompany(company);
    await companyRepository.addCompany(makeCompany());

    const storedCompany = await listCompany.execute({
      socialName: company.socialName,
    });

    expect(
      storedCompany.companies.every((c) => c instanceof Company),
    ).toBeTruthy();
    expect(storedCompany.companies[0].socialName).toEqual(company.socialName);
  });
});
