import { UserRepository } from '@app/repositories/user.repository';
import { Injectable, UnauthorizedException } from '@nestjs/common';
import { compare } from 'bcrypt';

interface LoginRequest {
  email: string;
  password: string;
}

@Injectable()
export class Login {
  constructor(private userRepository: UserRepository) {}

  async execute(body: LoginRequest) {
    const user = await this.userRepository.findByEmail(body.email);

    const passwordMatch = await compare(body.password, user.password);

    if (!passwordMatch) {
      throw new UnauthorizedException('Usuário ou senha incorretos');
    }

    return user;
  }
}
