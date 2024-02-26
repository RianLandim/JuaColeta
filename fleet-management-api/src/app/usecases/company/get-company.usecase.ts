import { CompanyRepository } from '@app/repositories/company.repository';
import { Injectable } from '@nestjs/common';

interface ListCompanyQueryParams {
  socialName?: string;
  cnpj?: string;
}

@Injectable()
export class ListCompany {
  constructor(private companyRepository: CompanyRepository) {}

  async execute(queryParams?: ListCompanyQueryParams) {
    const companies = await this.companyRepository.list({
      searchParams: queryParams,
    });

    return companies;
  }
}
