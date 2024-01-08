import { CreateCompany } from '@app/usecases/company/create';
import { Body, Controller, Get, Post } from '@nestjs/common';
import { CreateCompanyDto } from '../dtos/create-company.dto';

@Controller('company')
export class CompanyController {
  constructor(private createCompany: CreateCompany) {}

  @Post()
  create(@Body() data: Required<CreateCompanyDto>) {
    // @ts-expect-error the zod type is correct
    return this.createCompany.execute(data);
  }

  @Get()
  async list() {}
}
