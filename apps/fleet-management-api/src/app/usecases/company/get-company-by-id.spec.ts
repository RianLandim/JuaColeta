import { InMemoryCompanyRepository } from '@test/repositories/company.repository';
import { FindCompanyById } from './get-company-by-id.usecase';
import { makeCompany } from '@test/factories/company.factory';
import { Company } from '@app/entities/company';
import { createId } from '@paralleldrive/cuid2';
import { NotFoundException } from '@nestjs/common';

describe('Find Company By Id [usecase]', () => {
  const companyRepository = new InMemoryCompanyRepository();
  const findCompanyById = new FindCompanyById(companyRepository);

  it('should be able to list an company based on your id', async () => {
    const company = makeCompany();

    await companyRepository.addCompany(company);

    const companyStored = await findCompanyById.execute({ id: company.id });

    expect(companyStored).toBeInstanceOf(Company);
    expect(companyStored).toEqual(
      expect.objectContaining({
        id: company.id,
      }),
    );
  });

  it('Should return an error when company is not found', () => {
    expect(
      async () => await findCompanyById.execute({ id: createId() }),
    ).rejects.toThrow(NotFoundException);
  });
});
