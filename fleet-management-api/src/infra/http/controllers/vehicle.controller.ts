import { CreateVehicle } from '@app/usecases/vehicle/add-vehicle.usecase';
import { ListVehicle } from '@app/usecases/vehicle/get-vehicle.usecase';
import { JwtAuthGuard } from '@infra/authentication/guards/auth.guard';
import { Body, Controller, Get, Param, Post, UseGuards } from '@nestjs/common';
import { CreateVehicleDTO } from '../dtos/create-vehicle.dto';
import { VehicleViewModel } from '../view-model/vehicle.view-model';

// @UseGuards(JwtAuthGuard)
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
    const vehicles = await this.listVehicle.execute({ companyId });

    return vehicles.map(VehicleViewModel.toHttp);
  }
}
