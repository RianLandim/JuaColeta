import {
  CompanyRepository,
  GetDashboardInfoParams,
} from '@app/repositories/company.repository';
import { Injectable } from '@nestjs/common';

@Injectable()
export class GetDashboardInfo {
  constructor(private companyRepository: CompanyRepository) {}

  async execute(getDashboardInfoParams: GetDashboardInfoParams) {
    return this.companyRepository.getDashboardInfo(getDashboardInfoParams);
  }
}
