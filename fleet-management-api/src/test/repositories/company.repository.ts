import { Company } from '@app/entities/company';
import {
  CompanyListQueryParams,
  CompanyRepository,
} from '@app/repositories/company.repository';
import { NotFoundException } from '@nestjs/common';

export class InMemoryCompanyRepository implements CompanyRepository {
  private companies: Company[] = [];

  async addCompany(company: Company): Promise<void> {
    this.companies.push(company);
  }

  async getCompanyById(id: string): Promise<Company> {
    const companyIndex = this.companies.findIndex((c) => c.id === id);

    const company = this.companies[companyIndex];

    if (!company) {
      throw new NotFoundException('Company not found');
    }

    return company;
  }

  async addCompanyEmployee(userId: string, companyId: string): Promise<void> {
    throw new Error('Not implemented yet');
  }

  async getCompanies(params: CompanyListQueryParams): Promise<Company[]> {
    return this.companies.filter((c) => {
      if (c.cnpj === params.searchParams.cnpj) return true;
      if (c.socialName === params.searchParams.socialName) return true;
      return true;
    });
  }

  async getCompanyByUser(userId: string): Promise<Company[]> {
    const companiesIndexs = this.companies.map((c, index) => {
      if (c.users.some((u) => u.id === userId)) return index;
    });

    const companies: Company[] = [];

    for (const index of companiesIndexs) {
      const company = this.companies[index];

      companies.push(company);
    }

    if (!companies.length) {
      throw new NotFoundException('Este usuário não possui empresa');
    }

    return companies;
  }
}
