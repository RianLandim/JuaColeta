import { CreateUser } from '@app/usecases/user/create';
import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { CreateUserDto } from '../dtos/create-user.dto';
import { FindUsers } from '@app/usecases/user/find';
import { UserViewModel } from '../view-model/user.view-model';
import { FindUserById } from '@app/usecases/user/findById';

@Controller('user')
export class UserController {
  constructor(
    private createUser: CreateUser,
    private findUsers: FindUsers,
    private findUserById: FindUserById,
  ) {}

  @Post()
  create(@Body() data: Required<CreateUserDto>) {
    return this.createUser.execute(data);
  }

  @Get()
  async list() {
    const users = await this.findUsers.execute();

    return users.map(UserViewModel.toHttp);
  }

  @Get(':id')
  async listById(@Param('id') id: string) {
    const user = await this.findUserById.execute({ id });

    return UserViewModel.toHttp(user);
  }
}
