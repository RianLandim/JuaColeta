import { CreateUser } from '@app/usecases/user/create';
import { Body, Controller, Post } from '@nestjs/common';
import { CreateUserDto } from '../dtos/create-user.dto';

@Controller('user')
export class UserController {
  constructor(private createUser: CreateUser) {}

  @Post()
  create(@Body() data: Required<CreateUserDto>) {
    return this.createUser.execute(data);
  }
}
