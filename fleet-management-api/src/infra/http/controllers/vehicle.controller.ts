import { CreateVehicle } from '@app/usecases/vehicle/create';
import { ListVehicle } from '@app/usecases/vehicle/list';
import { JwtAuthGuard } from '@infra/authentication/guards/auth.guard';
import { Body, Controller, Get, Param, Post, UseGuards } from '@nestjs/common';

@UseGuards(JwtAuthGuard)
@Controller('vehicle')
export class VehicleController {
  constructor(
    private createVehicle: CreateVehicle,
    private listVehicle: ListVehicle,
  ) {}

  @Post()
  async create(@Body() data: any) {
    return this.createVehicle.execute(data);
  }

  @Get(':companyId')
  async list(@Param('companyId') companyId: string) {
    return this.listVehicle.execute({ companyId });
  }
}
