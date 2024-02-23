import { InMemoryUserRepository } from '@test/repositories/user.repository';
import { Login } from './login';
import { makeUser } from '@test/factories/user.factory';
import { hashSync } from 'bcrypt';
import { User } from '@app/entities/user';
import { UnauthorizedException } from '@nestjs/common';

describe('login [usecase]', () => {
  const userRepository = new InMemoryUserRepository();
  const login = new Login(userRepository);

  it('Should be able to login in application', async () => {
    const user = makeUser({
      password: hashSync('teste123', 8),
    });

    await userRepository.create(user);

    const loggedUser = await login.execute({
      email: user.email,
      password: 'teste123',
    });

    expect(loggedUser.email).toEqual(user.email);
    expect(loggedUser).toBeInstanceOf(User);
  });

  it('Should throw an error for user not found', async () => {
    expect(async () => {
      await login.execute({ email: '', password: '' });
    }).rejects.toThrow('User not found');
  });

  it('Should throw an error for password not matching', async () => {
    const user = makeUser({
      password: hashSync('teste123', 8),
    });

    await userRepository.create(user);

    expect(async () => {
      await login.execute({ email: user.email, password: 'teste1234' });
    }).rejects.toThrow(UnauthorizedException);
  });
});
