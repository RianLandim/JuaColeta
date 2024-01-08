import { CompanyRepository } from '@app/repositories/company.repository';
import { Injectable } from '@nestjs/common';

@Injectable()
export class FindCompany {
  constructor(private companyRepository: CompanyRepository) {}

  async execute() {
    const companies = await this.companyRepository.list();

    return companies;
  }
}
