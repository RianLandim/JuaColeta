import { CreateUser } from '@app/usecases/user/create';
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
import { FindUsers } from '@app/usecases/user/find';
import { UserViewModel } from '../view-model/user.view-model';
import { FindUserById } from '@app/usecases/user/findById';
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
  create(@Body() data: Required<CreateUserDto>) {
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
    this.logger.debug(`current-user has id: ${currentUser.userId}`);

    const user = await this.findUserById.execute({ id: currentUser.userId });

    return UserViewModel.toHttp(user);
  }

  @Get(':id')
  async listById(@Param('id') id: string) {
    const user = await this.findUserById.execute({ id });

    return UserViewModel.toHttp(user);
  }
}
