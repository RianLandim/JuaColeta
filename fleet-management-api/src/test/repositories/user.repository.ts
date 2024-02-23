import { User } from '@app/entities/user';
import { UserRepository } from '@app/repositories/user.repository';

export class InMemoryUserRepository implements UserRepository {
  users: User[] = [];

  async create(user: User): Promise<void> {
    this.users.push(user);
  }

  async find(): Promise<User[]> {
    return this.users;
  }

  async findByEmail(email: string): Promise<User> {
    const userIndex = this.users.findIndex((user) => user.email === email);

    const user = this.users[userIndex];

    if (!user) {
      throw new Error('User not found');
    }

    return user;
  }

  async findById(id: string): Promise<User> {
    const userIndex = this.users.findIndex((user) => user.id === id);

    const user = this.users[userIndex];

    if (!user) {
      throw new Error('User not found');
    }

    return user;
  }
}
