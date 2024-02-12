import { CreateCompany } from '@app/usecases/company/create';
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
import { FindCompany } from '@app/usecases/company/find';
import { CompanyViewModel } from '../view-model/company.view-model';
import { User, UserProps } from '@utils/decorator/user.decorator';

import { InsertEmployeeCompany } from '@app/usecases/company/insertEmployee';
import { InsertEmployeeCompanyDto } from '../dtos/insert-employee-company';
import { ListCompanyDTO } from '../dtos/list-company.dto';
import { JwtAuthGuard } from '@infra/authentication/guards/auth.guard';

@UseGuards(JwtAuthGuard)
@Controller('company')
export class CompanyController {
  constructor(
    private createCompany: CreateCompany,
    private findCompany: FindCompany,
    private insertEmployeeCompany: InsertEmployeeCompany,
  ) {}

  @Post()
  create(@Body() data: CreateCompanyDTO) {
    return this.createCompany.execute(data);
  }

  @Get()
  async list(@User() user: UserProps, @Query() queryParams: ListCompanyDTO) {
    const companies = await this.findCompany.execute({
      socialName: queryParams?.socialName,
      cnpj: queryParams?.cnpj,
    });

    return companies.map(CompanyViewModel.toHttp);
  }

  @Post(':id/insert-employee')
  async insertEmployee(
    @Param('id') id: string,
    @Body() body: InsertEmployeeCompanyDto,
  ) {
    await this.insertEmployeeCompany.execute({
      companyId: id,
      userId: body.userId,
    });
  }
}
