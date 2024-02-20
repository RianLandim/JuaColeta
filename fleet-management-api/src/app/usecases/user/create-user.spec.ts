import { InMemoryUserRepository } from '@test/repositories/user.repository';
import { CreateUser } from './create-user.usecase';
import { makeUser } from '@test/factories/user.factory';
import { User } from '@app/entities/user';

describe('create user [usecase]', () => {
  const user = makeUser();
  const userRepository = new InMemoryUserRepository();
  const createUser = new CreateUser(userRepository);

  it('should be able to create an user', () => {
    expect(user).toBeInstanceOf(User);
    expect(async () => await createUser.execute(user)).not.toThrow();
  });

  it('should be able to list the user created', () => {
    expect(userRepository.users).toEqual(
      expect.arrayContaining([expect.objectContaining(user)]),
    );
  });
});
