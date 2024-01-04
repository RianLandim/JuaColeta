import { Module } from '@nestjs/common';
import { AuthenticationController } from './controllers/authentication.controller';
import { CreateUser } from '@app/usecases/user/create';
import { UserController } from './controllers/user.controller';
import { AuthenticationModule } from '@infra/authentication/authentication.module';
import { DatabaseModule } from '@infra/database/database.module';
import { Login } from '@app/usecases/auth/login';
import { FindUsers } from '@app/usecases/user/find';
import { FindUserById } from '@app/usecases/user/findById';

@Module({
  imports: [AuthenticationModule, DatabaseModule],
  controllers: [AuthenticationController, UserController],
  providers: [CreateUser, Login, FindUsers, FindUserById],
})
export class HttpModule {}
