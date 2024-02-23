import { makeCompany } from '@test/factories/company.factory';
import { Company } from './company';

describe('Company Entity', () => {
  it('Should be able to create an Company instance', () => {
    const company = new Company(makeCompany());

    expect(company).toBeInstanceOf(Company);
  });
});
