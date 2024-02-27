import { User } from '@app/entities/user';
import { UserRepository } from '@app/repositories/user.repository';
import { Injectable } from '@nestjs/common';

import { hashSync } from 'bcrypt';

interface UserRequestProps {
  email: string;
  password: string;
  name: string;
  license?: string | null;
  cellphone: string;
  companyId?: string;
  role: 'ADMIN' | 'COMPANY_ADMIN' | 'DRIVER';
}

export interface UserResponseProps {
  id: string;
}

@Injectable()
export class CreateUser {
  constructor(private userRepository: UserRepository) {}

  async execute(request: UserRequestProps): Promise<UserResponseProps> {
    const hashedPassword = hashSync(request.password, 8);

    const user = new User({ ...request, password: hashedPassword });

    await this.userRepository.create(user, request.companyId);

    return {
      id: user.id,
    };
  }
}
