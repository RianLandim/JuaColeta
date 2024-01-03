import { User } from '@app/entities/user';

export class UserViewModel {
  static toHttp(user: User) {
    return {
      id: user.id,
      email: user.email,
      name: user.name,
      cellphone: user.cellphone,
      license: user.license,
      role: user.role,
      createdAt: user.createdAt,
    };
  }
}
