import { Module } from '@nestjs/common';
import { AuthenticationController } from './controllers/authentication.controller';
import { CreateUser } from '@app/usecases/user/create';
import { UserController } from './controllers/user.controller';
import { AuthenticationModule } from '@infra/authentication/authentication.module';
import { DatabaseModule } from '@infra/database/database.module';
import { Login } from '@app/usecases/auth/login';
import { FindUsers } from '@app/usecases/user/find';
import { FindUserById } from '@app/usecases/user/findById';
import { CompanyController } from './controllers/company.controllet';
import { CreateCompany } from '@app/usecases/company/create';
import { FindCompany } from '@app/usecases/company/find';
import { InsertEmployeeCompany } from '@app/usecases/company/insertEmployee';
import { VehicleController } from './controllers/vehicle.controller';
import { CreateVehicle } from '@app/usecases/vehicle/create';

@Module({
  imports: [AuthenticationModule, DatabaseModule],
  controllers: [
    AuthenticationController,
    UserController,
    CompanyController,
    VehicleController,
  ],
  providers: [
    CreateUser,
    Login,
    FindUsers,
    FindUserById,
    CreateCompany,
    FindCompany,
    InsertEmployeeCompany,
    CreateVehicle,
  ],
})
export class HttpModule {}
