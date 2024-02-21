import { InMemoryUserRepository } from '@test/repositories/user.repository';
import { ListUsers } from './list-users.usecase';
import { User } from '@app/entities/user';

describe('list users [usecase]', () => {
  const userRepository = new InMemoryUserRepository();
  const listUsers = new ListUsers(userRepository);

  it('should be able to list all users', async () => {
    const users = await listUsers.execute();

    expect(users.every((u) => u instanceof User)).toBeTruthy();
  });
});
