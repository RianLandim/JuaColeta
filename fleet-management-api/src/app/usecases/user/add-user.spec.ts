import { InMemoryUserRepository } from '@test/repositories/user.repository';
import { CreateUser } from './add-user.usecase';
import { makeUser } from '@test/factories/user.factory';
import { User } from '@app/entities/user';

describe('create user [usecase]', () => {
  const userRepository = new InMemoryUserRepository();
  const createUser = new CreateUser(userRepository);
  const user = makeUser();

  it('should be able to create an user', () => {
    expect(user).toBeInstanceOf(User);
    expect(async () => await createUser.execute(user)).not.toThrow();
  });
});
