import { UserRepository } from '@app/repositories/user.repository';
import { Injectable } from '@nestjs/common';

@Injectable()
export class GetUsersWithVehicle {
  constructor(private userRepository: UserRepository) {}

  async execute() {
    const users = await this.userRepository.findUsersWithVehicle();

    console.log(users);
    return users;
  }
}
