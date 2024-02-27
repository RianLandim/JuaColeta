import { User } from '../entities/user';

export abstract class UserRepository {
  abstract create(user: User, companyId?: string): Promise<void>;
  abstract findByEmail(email: string): Promise<User>;
  abstract findById(id: string): Promise<User>;
  abstract find(): Promise<User[]>;
}
