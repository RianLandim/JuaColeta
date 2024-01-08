import { Module } from '@nestjs/common';
import { PrismaService } from './prisma/prisma.service';
import { UserRepository } from '@app/repositories/user.repository';
import { PrismaUserRepository } from './prisma/repositories/prisma.user.repository';
import { CompanyRepository } from '@app/repositories/company.repository';
import { PrismaCompanyRepository } from './prisma/repositories/prisma.company.repository';

@Module({
  providers: [
    PrismaService,
    { provide: UserRepository, useClass: PrismaUserRepository },
    { provide: CompanyRepository, useClass: PrismaCompanyRepository },
  ],
  exports: [UserRepository, CompanyRepository],
})
export class DatabaseModule {}
