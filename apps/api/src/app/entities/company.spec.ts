import { makeCompany } from '@test/factories/company.factory';
import { Company } from './company';
import { makeUser } from '@test/factories/user.factory';
import { User } from './user';

describe('Company Entity', () => {
  it('Should be able to create an Company instance', () => {
    const company = new Company(makeCompany());

    expect(company).toBeInstanceOf(Company);
  });

  it('Should be able to create an user instance inside', () => {
    const company = makeCompany({
      users: [makeUser()],
    });

    expect(company).toBeInstanceOf(Company);
    expect(company.users.every((user) => user instanceof User)).toBeTruthy();
  });
});
