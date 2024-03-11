import {
  CompanyListQueryParams,
  CompanyRepository,
} from '@app/repositories/company.repository';
import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../prisma.service';
import { Company } from '@app/entities/company';
import { PrismaCompanyMapper } from '../mappers/prisma.company.mapper';
import { Address } from '@app/entities/address';

@Injectable()
export class PrismaCompanyRepository implements CompanyRepository {
  constructor(private prisma: PrismaService) {}

  async addCompany(company: Company): Promise<void> {
    const rawCompany = PrismaCompanyMapper.toPrisma(company);

    await this.prisma.company.create({
      data: rawCompany,
    });
  }

  async getCompanies({
    searchParams,
  }: CompanyListQueryParams): Promise<Company[]> {
    const rawCompanies = await this.prisma.company.findMany({
      include: {
        address: true,
      },
      where: {
        cnpj: { contains: searchParams?.cnpj },
        socialName: { contains: searchParams?.socialName },
      },
      orderBy: {
        createdAt: 'desc',
      },
    });

    const companies = rawCompanies.map((comp) => {
      const address = new Address(comp.address);

      return new Company({ ...comp, address });
    });

    return companies;
  }

  async getCompanyById(id: string): Promise<Company> {
    const rawCompany = await this.prisma.company.findUnique({
      where: { id },
      include: {
        address: true,
      },
    });

    if (!rawCompany) {
      throw new NotFoundException('Empresa não encontrada');
    }

    const address = new Address(rawCompany.address);

    const company = new Company({ ...rawCompany, address });

    return company;
  }

  async addCompanyEmployee(userId: string, companyId: string): Promise<void> {
    await this.prisma.company.update({
      where: {
        id: companyId,
      },
      data: {
        users: {
          connect: {
            id: userId,
          },
        },
      },
    });
  }

  async getCompanyByUser(userId: string): Promise<Company[]> {
    const companies = await this.prisma.company.findMany({
      where: {
        users: {
          some: {
            id: userId,
          },
        },
      },
      include: {
        address: true,
      },
    });

    if (!companies.length) {
      throw new NotFoundException('Este usuário não possui empresa');
    }

    return companies.map((c) => {
      const address = new Address(c.address, c.address.id);

      return new Company({ ...c, address }, c.id);
    });
  }
}
