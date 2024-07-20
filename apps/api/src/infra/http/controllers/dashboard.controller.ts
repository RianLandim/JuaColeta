import { GetDashboardInfo } from '@app/usecases/dashboard/get-dashboard-info';
import { JwtAuthGuard } from '@infra/authentication/guards/auth.guard';
import { Controller, Get, Param, UseGuards } from '@nestjs/common';

@UseGuards(JwtAuthGuard)
@Controller('dashboard')
export class DashboardController {
  constructor(private getDashboardInfo: GetDashboardInfo) {}

  @Get('info')
  async getDashboard(
    @Param('startDate') startDate: string,
    @Param('endDate') endDate: string,
  ) {
    return this.getDashboardInfo.execute({ startDate, endDate });
  }
}
