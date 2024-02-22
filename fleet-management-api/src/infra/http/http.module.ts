import { Module } from '@nestjs/common';
import { AuthenticationController } from './controllers/authentication.controller';
import { CreateUser } from '@app/usecases/user/create-user.usecase';
import { UserController } from './controllers/user.controller';
import { AuthenticationModule } from '@infra/authentication/authentication.module';
import { DatabaseModule } from '@infra/database/database.module';
import { Login } from '@app/usecases/auth/login';
import { FindUsers } from '@app/usecases/user/list-users.usecase';
import { FindUserById } from '@app/usecases/user/find-by-id.usecase';
import { CompanyController } from './controllers/company.controller';
import { CreateCompany } from '@app/usecases/company/create';
import { FindCompany } from '@app/usecases/company/find';
import { InsertEmployeeCompany } from '@app/usecases/company/insertEmployee';
import { VehicleController } from './controllers/vehicle.controller';
import { CreateVehicle } from '@app/usecases/vehicle/create-vehicle.usecase';
import { ListVehicle } from '@app/usecases/vehicle/list-vehicle.usecase';
import { FindCompanyById } from '@app/usecases/company/findById';

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
    ListVehicle,
    FindCompanyById,
  ],
})
export class HttpModule {}
