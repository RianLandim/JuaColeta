import { Company } from '@app/entities/company';

type CompanyListSearchParams = {
  cnpj?: string;
  socialName?: string;
  offset?: string;
  page?: string;
};

export type GetDashboardInfoParams = {
  startDate: string;
  endDate: string;
};

export interface CompanyListQueryParams {
  searchParams: CompanyListSearchParams;
}

export abstract class CompanyRepository {
  abstract addCompany(company: Company): Promise<void>;
  abstract getCompanies(
    params: CompanyListQueryParams,
  ): Promise<{ companies: Company[]; pagesCount?: number }>;
  abstract getCompanyById(id: string): Promise<Company>;
  abstract addCompanyEmployee(userId: string, companyId: string): Promise<void>;
  abstract getCompanyByUser(userId: string): Promise<Company[]>;
  abstract getDashboardInfo(GetDashboardInfoParams): Promise<any>;
}
