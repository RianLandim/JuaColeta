import { CompanyRepository } from '@app/repositories/company.repository';
import { Injectable } from '@nestjs/common';

@Injectable()
export class FindCompanyById {
  constructor(private companyRepository: CompanyRepository) {}

  async execute() {}
}
