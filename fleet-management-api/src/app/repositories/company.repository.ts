import { Company } from '@app/entities/company';

export abstract class CompanyRepository {
  abstract create(company: Company): Promise<void>;
  abstract list(): Promise<Company[]>;
}
