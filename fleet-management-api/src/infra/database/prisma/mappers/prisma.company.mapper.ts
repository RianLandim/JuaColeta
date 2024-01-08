import { Address } from '@app/entities/address';
import { Company } from '@app/entities/company';
import { Prisma } from '@prisma/client';

export class PrismaCompanyMapper {
  static addressToPrisma(address: Address): Prisma.AddressCreateInput {
    return {
      id: address.id,
      city: address.city,
      country: address.country,
      district: address.district,
      number: address.number,
      state: address.state,
      street: address.street,
      zipCode: address.zipCode,
      createdAt: address.createdAt,
      updatedAt: address.updatedAt,
    };
  }

  static toPrisma(company: Company): Prisma.CompanyCreateInput {
    const address = this.addressToPrisma(company.address);

    return {
      id: company.id,
      cnpj: company.cnpj,
      socialName: company.socialName,
      createdAt: company.createdAt,
      updatedAt: company.updatedAt,
      address: {
        create: address,
      },
    };
  }
}
