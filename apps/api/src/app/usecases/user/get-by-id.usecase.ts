import { UserRepository } from '@app/repositories/user.repository';
import { Injectable } from '@nestjs/common';

interface FindUserByIdRequestProps {
  id: string;
}

@Injectable()
export class FindUserById {
  constructor(private userRepository: UserRepository) {}

  async execute({ id }: FindUserByIdRequestProps) {
    const user = await this.userRepository.findById(id);

    return user;
  }
}
