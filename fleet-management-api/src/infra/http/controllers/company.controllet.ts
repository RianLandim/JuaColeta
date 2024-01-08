import { CreateCompany } from '@app/usecases/company/create';
import { Body, Controller, Get, Logger, Post, UseGuards } from '@nestjs/common';
import { CreateCompanyDto } from '../dtos/create-company.dto';
import { FindCompany } from '@app/usecases/company/find';
import { CompanyViewModel } from '../view-model/company.view-model';
import { User, UserProps } from '@utils/decorator/user.decorator';
import { JwtAuthGuard } from '@infra/authentication/guards/auth.guard';

@Controller('company')
export class CompanyController {
  constructor(
    private createCompany: CreateCompany,
    private findCompany: FindCompany,
  ) {}

  logger = new Logger(CompanyController.name);

  @Post()
  create(@Body() data: CreateCompanyDto) {
    // @ts-expect-error the zod type is correct
    return this.createCompany.execute(data);
  }

  @UseGuards(JwtAuthGuard)
  @Get()
  async list(@User() user: UserProps) {
    this.logger.debug(`user: ${JSON.stringify(user)}`);

    const companies = await this.findCompany.execute();

    return companies.map(CompanyViewModel.toHttp);
  }
}
