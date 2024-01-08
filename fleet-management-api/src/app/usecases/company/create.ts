import { Address } from '@app/entities/address';
import { Company } from '@app/entities/company';
import { CompanyRepository } from '@app/repositories/company.repository';
import { Injectable } from '@nestjs/common';

type AddressProps = {
  number: number;
  street: string;
  city: string;
  state: string;
  district: string;
  country: string;
  zipCode: string;
};

interface CreateCompanyRequest {
  cnpj: string;
  socialName: string;
  address: AddressProps;
}

@Injectable()
export class CreateCompany {
  constructor(private companyRepository: CompanyRepository) {}

  async execute(body: CreateCompanyRequest) {
    const address = new Address(body.address);

    const company = new Company({
      ...body,
      address: address,
      addressId: address.id,
    });

    await this.companyRepository.create(company);
  }
}
