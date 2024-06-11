import { Company } from '@app/entities/company';

export class CompanyViewModel {
  static toHttp(company: Company) {
    return {
      id: company.id,
      cnpj: company.cnpj,
      socialName: company.socialName,
      address: {
        id: company.address.id,
        number: company.address.number,
        street: company.address.street,
        district: company.address.district,
        city: company.address.city,
        state: company.address.state,
        country: company.address.country,
        zipCode: company.address.zipCode,
      },
      createdAt: company.createdAt,
      updatedAt: company.updatedAt,
    };
  }
}
