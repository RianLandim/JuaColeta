import { User } from '@app/entities/user';
import { UserRepository } from '@app/repositories/user.repository';
import { Injectable } from '@nestjs/common';

import { hashSync } from 'bcrypt';

interface UserRequestProps {
  email: string;
  password: string;
  name: string;
  license: string | null;
  cellphone: string;
  role: 'ADMIN' | 'COMPANY_ADMIN' | 'DRIVER';
}

@Injectable()
export class CreateUser {
  constructor(private userRepository: UserRepository) {}

  async execute(request: UserRequestProps) {
    const hashedPassword = hashSync(request.password, 8);

    const user = new User({ ...request, password: hashedPassword });

    await this.userRepository.create(user);

    return {
      user,
    };
  }
}
