import { makeUser } from '@test/factories/user.factory';
import { User } from './user';

describe('User Entity', () => {
  it('Should be able to create an user entity instance', () => {
    const user = new User(makeUser());

    expect(user).toBeInstanceOf(User);
  });
});
