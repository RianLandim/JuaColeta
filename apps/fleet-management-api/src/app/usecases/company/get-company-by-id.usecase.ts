import { CompanyRepository } from '@app/repositories/company.repository';
import { Injectable } from '@nestjs/common';

interface FindCompanyByIdRequest {
  id: string;
}

@Injectable()
export class FindCompanyById {
  constructor(private companyRepository: CompanyRepository) {}

  async execute({ id }: FindCompanyByIdRequest) {
    const company = await this.companyRepository.getCompanyById(id);

    return company;
  }
}
