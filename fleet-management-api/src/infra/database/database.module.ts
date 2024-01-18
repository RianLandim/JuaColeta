import { Module } from '@nestjs/common';
import { PrismaService } from './prisma/prisma.service';
import { UserRepository } from '@app/repositories/user.repository';
import { PrismaUserRepository } from './prisma/repositories/prisma.user.repository';
import { CompanyRepository } from '@app/repositories/company.repository';
import { PrismaCompanyRepository } from './prisma/repositories/prisma.company.repository';
import { VehicleRepository } from '@app/repositories/vehicle.repository';
import { PrismaVehicleRepository } from './prisma/repositories/prisma.vehicle.repository';

@Module({
  providers: [
    PrismaService,
    { provide: UserRepository, useClass: PrismaUserRepository },
    { provide: CompanyRepository, useClass: PrismaCompanyRepository },
    { provide: VehicleRepository, useClass: PrismaVehicleRepository },
  ],
  exports: [UserRepository, CompanyRepository, VehicleRepository],
})
export class DatabaseModule {}
