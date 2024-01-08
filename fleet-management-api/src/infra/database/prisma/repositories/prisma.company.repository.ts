import { CompanyRepository } from '@app/repositories/company.repository';
import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma.service';
import { Company } from '@app/entities/company';
import { PrismaCompanyMapper } from '../mappers/prisma.company.mapper';
import { Address } from '@app/entities/address';

@Injectable()
export class PrismaCompanyRepository implements CompanyRepository {
  constructor(private prisma: PrismaService) {}

  async create(company: Company): Promise<void> {
    const rawCompany = PrismaCompanyMapper.toPrisma(company);

    await this.prisma.company.create({
      data: rawCompany,
    });
  }

  async list(): Promise<Company[]> {
    const rawCompanies = await this.prisma.company.findMany({
      include: {
        address: true,
      },
    });

    const companies = rawCompanies.map((comp) => {
      const address = new Address(comp.address);

      return new Company({ ...comp, address });
    });

    return companies;
  }
}
