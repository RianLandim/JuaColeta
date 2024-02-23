import { Company } from '@app/entities/company';
import { ListCompany } from './list-company.usecase';
import { InMemoryCompanyRepository } from '@test/repositories/company.repository';

describe('List Company [usecase]', () => {
  const companyRepository = new InMemoryCompanyRepository();
  const listCompany = new ListCompany(companyRepository);

  it('should be able to list all companies', async () => {
    const companies = await listCompany.execute();

    expect(companies.map((c) => c instanceof Company)).toBeTruthy();
  });
});
