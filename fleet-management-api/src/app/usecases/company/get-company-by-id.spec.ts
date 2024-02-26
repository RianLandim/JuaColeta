import { InMemoryCompanyRepository } from '@test/repositories/company.repository';
import { FindCompanyById } from './get-company-by-id.usecase';
import { makeCompany } from '@test/factories/company.factory';
import { createId } from '@paralleldrive/cuid2';
import { Company } from '@app/entities/company';

describe('Find Company By Id [usecase]', () => {
  const companyRepository = new InMemoryCompanyRepository();
  const findCompanyById = new FindCompanyById(companyRepository);

  it('should be able to list an company based on your id', async () => {
    const companyId = createId();

    const company = makeCompany({
      id: companyId,
    });

    await companyRepository.create(company);

    const companyStored = await findCompanyById.execute({ id: companyId });

    expect(companyStored).toBeInstanceOf(Company);
    expect(companyStored).toEqual(
      expect.objectContaining({
        id: companyId,
      }),
    );
  });
});
