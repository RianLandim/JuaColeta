import { Module } from '@nestjs/common';
import { AuthenticationController } from './controllers/authentication.controller';
import { CreateUser } from '@app/usecases/user/add-user.usecase';
import { UserController } from './controllers/user.controller';
import { AuthenticationModule } from '@infra/authentication/authentication.module';
import { DatabaseModule } from '@infra/database/database.module';
import { Login } from '@app/usecases/auth/login';
import { ListUsers } from '@app/usecases/user/get-users.usecase';
import { FindUserById } from '@app/usecases/user/get-by-id.usecase';
import { CompanyController } from './controllers/company.controller';
import { CreateCompany } from '@app/usecases/company/add-company.usecase';
import { ListCompany } from '@app/usecases/company/get-company.usecase';
import { InsertEmployeeCompany } from '@app/usecases/company/add-company-employe.usecase';
import { VehicleController } from './controllers/vehicle.controller';
import { CreateVehicle } from '@app/usecases/vehicle/add-vehicle.usecase';
import { ListVehicle } from '@app/usecases/vehicle/get-vehicle.usecase';
import { FindCompanyById } from '@app/usecases/company/get-company-by-id.usecase';
import { NotificationController } from './controllers/notication.controller';
import { AddNotification } from '@app/usecases/notification/add-notification.usecase';
import { GetNotifications } from '@app/usecases/notification/get-notification.usecase';
import { MailModule } from '@infra/mail/mail.module';

@Module({
  imports: [AuthenticationModule, DatabaseModule, MailModule],
  controllers: [
    AuthenticationController,
    UserController,
    CompanyController,
    VehicleController,
    NotificationController,
  ],
  providers: [
    CreateUser,
    Login,
    ListUsers,
    FindUserById,
    CreateCompany,
    ListCompany,
    InsertEmployeeCompany,
    CreateVehicle,
    ListVehicle,
    FindCompanyById,
    AddNotification,
    GetNotifications,
  ],
})
export class HttpModule {}
