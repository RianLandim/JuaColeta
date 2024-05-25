import { CreateCompany } from '@app/usecases/company/add-company.usecase';
import {
  Body,
  Controller,
  Get,
  Param,
  Post,
  Query,
  UseGuards,
} from '@nestjs/common';
import { CreateCompanyDTO } from '../dtos/create-company.dto';
import { ListCompany } from '@app/usecases/company/get-company.usecase';
import { CompanyViewModel } from '../view-model/company.view-model';
import { ListCompanyDTO } from '../dtos/list-company.dto';
import { JwtAuthGuard } from '@infra/authentication/guards/auth.guard';
import { FindCompanyById } from '@app/usecases/company/get-company-by-id.usecase';
import { RolesGuard } from '@infra/authentication/guards/role.guard';
import { Roles } from '@utils/decorator/role.decorator';

@Controller('company')
export class CompanyController {
  constructor(
    private createCompany: CreateCompany,
    private listCompany: ListCompany,
    private findCompanyById: FindCompanyById,
  ) {}

  @Post()
  addCompany(@Body() data: CreateCompanyDTO) {
    return this.createCompany.execute(data);
  }

  @Get()
  async getCompanies(@Query() queryParams: ListCompanyDTO) {
    const { companies, pagesCount } = await this.listCompany.execute({
      socialName: queryParams?.socialName,
      cnpj: queryParams?.cnpj,
      offset: queryParams?.offset,
      page: queryParams?.page,
    });

    return { companies: companies.map(CompanyViewModel.toHttp), pagesCount };
  }

  @Get(':id')
  async getById(@Param('id') id: string) {
    const company = await this.findCompanyById.execute({ id });

    return CompanyViewModel.toHttp(company);
  }
}
