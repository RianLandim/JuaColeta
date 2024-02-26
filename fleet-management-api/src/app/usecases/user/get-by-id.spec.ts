import { InMemoryUserRepository } from '@test/repositories/user.repository';
import { FindUserById } from './get-by-id.usecase';
import { makeUser } from '@test/factories/user.factory';
import { User } from '@app/entities/user';

describe('Find user by id [usecase]', () => {
  const userRepository = new InMemoryUserRepository();
  const findUserById = new FindUserById(userRepository);

  it('Should be able to find an certain user by her id', async () => {
    const user = makeUser();

    await userRepository.create(user);

    const storedUser = await findUserById.execute({ id: user.id });

    expect(storedUser).toBeInstanceOf(User);
    expect(storedUser).toEqual(
      expect.objectContaining({
        id: user.id,
      }),
    );
  });
});
