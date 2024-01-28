import { Company } from '@app/entities/company';

type CompanyListSearchParams = {
  cnpj?: string;
  socialName?: string;
};

export interface CompanyListQueryParams {
  searchParams: CompanyListSearchParams;
}

export abstract class CompanyRepository {
  abstract create(company: Company): Promise<void>;
  abstract list(params: CompanyListQueryParams): Promise<Company[]>;
  abstract findById(id: string): Promise<Company>;
  abstract insertEmployee(userId: string, companyId: string): Promise<void>;
}
