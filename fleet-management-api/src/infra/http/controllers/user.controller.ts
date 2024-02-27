import { CreateUser } from '@app/usecases/user/add-user.usecase';
import {
  Body,
  Controller,
  Get,
  Logger,
  Param,
  Post,
  UseGuards,
} from '@nestjs/common';
import { CreateUserDto } from '../dtos/create-user.dto';
import { ListUsers } from '@app/usecases/user/get-users.usecase';
import { UserViewModel } from '../view-model/user.view-model';
import { FindUserById } from '@app/usecases/user/get-by-id.usecase';
import { User, UserProps } from '@utils/decorator/user.decorator';
import { JwtAuthGuard } from '@infra/authentication/guards/auth.guard';

@UseGuards(JwtAuthGuard)
@Controller('user')
export class UserController {
  constructor(
    private createUser: CreateUser,
    private listUsers: ListUsers,
    private findUserById: FindUserById,
  ) {}

  logger = new Logger(UserController.name);

  @Post()
  addUser(@Body() data: CreateUserDto, @User() currentUser: UserProps) {
    return this.createUser.execute(data);
  }

  @Get()
  async getUsers() {
    const users = await this.listUsers.execute();

    return users.map(UserViewModel.toHttp);
  }

  @Get('current-user')
  async currentUser(@User() currentUser: UserProps) {
    const user = await this.findUserById.execute({ id: currentUser.id });

    return UserViewModel.toHttp(user);
  }

  @Get(':id')
  async getUserById(@Param('id') id: string) {
    const user = await this.findUserById.execute({ id });

    return UserViewModel.toHttp(user);
  }
}
