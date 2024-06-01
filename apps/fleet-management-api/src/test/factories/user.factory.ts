import { User } from '@app/entities/user';
import { fakerPT_BR as faker } from '@faker-js/faker';

type Override = Partial<User>;

export function makeUser(override?: Override) {
  return new User({
    name: faker.person.fullName(),
    cellphone: faker.phone.number(),
    email: faker.internet.email(),
    password: faker.internet.password(),
    role: 'COMPANY_ADMIN',
    ...override,
  });
}
