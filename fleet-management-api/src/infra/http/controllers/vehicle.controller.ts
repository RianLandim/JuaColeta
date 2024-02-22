import { CreateVehicle } from '@app/usecases/vehicle/create-vehicle.usecase';
import { ListVehicle } from '@app/usecases/vehicle/list-vehicle.usecase';
import { JwtAuthGuard } from '@infra/authentication/guards/auth.guard';
import { Body, Controller, Get, Param, Post, UseGuards } from '@nestjs/common';
import { CreateVehicleDTO } from '../dtos/create-vehicle.dto';

@UseGuards(JwtAuthGuard)
@Controller('vehicle')
export class VehicleController {
  constructor(
    private createVehicle: CreateVehicle,
    private listVehicle: ListVehicle,
  ) {}

  @Post()
  async create(@Body() data: CreateVehicleDTO) {
    return this.createVehicle.execute(data);
  }

  @Get(':companyId')
  async list(@Param('companyId') companyId: string) {
    return this.listVehicle.execute({ companyId });
  }
}
