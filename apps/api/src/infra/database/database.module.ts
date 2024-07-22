import { Module } from '@nestjs/common';
import { PrismaService } from './prisma/prisma.service';
import { UserRepository } from '@app/repositories/user.repository';
import { PrismaUserRepository } from './prisma/repositories/prisma.user.repository';
import { CompanyRepository } from '@app/repositories/company.repository';
import { PrismaCompanyRepository } from './prisma/repositories/prisma.company.repository';
import { VehicleRepository } from '@app/repositories/vehicle.repository';
import { PrismaVehicleRepository } from './prisma/repositories/prisma.vehicle.repository';
import { NotificationRepository } from '@app/repositories/notification.repository';
import { PrismaNotificationRepository } from './prisma/repositories/prisma.notification.repository';
import { BillingRepository } from '@app/repositories/billing.repository';
import { PrismaBillingRepository } from './prisma/repositories/prisma.billing.repository';

@Module({
  providers: [
    PrismaService,
    { provide: UserRepository, useClass: PrismaUserRepository },
    { provide: CompanyRepository, useClass: PrismaCompanyRepository },
    { provide: VehicleRepository, useClass: PrismaVehicleRepository },
    { provide: NotificationRepository, useClass: PrismaNotificationRepository },
    { provide: BillingRepository, useClass: PrismaBillingRepository },
  ],
  exports: [
    UserRepository,
    CompanyRepository,
    VehicleRepository,
    NotificationRepository,
    BillingRepository,
  ],
})
export class DatabaseModule {}
