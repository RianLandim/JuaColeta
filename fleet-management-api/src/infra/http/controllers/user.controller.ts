import { CreateUser } from '@app/usecases/user/create-user.usecase';
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
import { FindUsers } from '@app/usecases/user/list-users.usecase';
import { UserViewModel } from '../view-model/user.view-model';
import { FindUserById } from '@app/usecases/user/find-by-id.usecase';
import { User, UserProps } from '@utils/decorator/user.decorator';
import { JwtAuthGuard } from '@infra/authentication/guards/auth.guard';

@Controller('user')
export class UserController {
  constructor(
    private createUser: CreateUser,
    private findUsers: FindUsers,
    private findUserById: FindUserById,
  ) {}

  logger = new Logger(UserController.name);

  @Post()
  create(@Body() data: CreateUserDto) {
    return this.createUser.execute(data);
  }

  @Get()
  async list() {
    const users = await this.findUsers.execute();

    return users.map(UserViewModel.toHttp);
  }

  @UseGuards(JwtAuthGuard)
  @Get('current-user')
  async currentUser(@User() currentUser: UserProps) {
    this.logger.debug(`current-user has id: ${currentUser.id}`);

    const user = await this.findUserById.execute({ id: currentUser.id });

    return UserViewModel.toHttp(user);
  }

  @Get(':id')
  async listById(@Param('id') id: string) {
    const user = await this.findUserById.execute({ id });

    return UserViewModel.toHttp(user);
  }
}
