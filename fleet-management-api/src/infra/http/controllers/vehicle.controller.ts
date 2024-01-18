import { CreateVehicle } from '@app/usecases/vehicle/create';
import { JwtAuthGuard } from '@infra/authentication/guards/auth.guard';
import { Body, Controller, UseGuards } from '@nestjs/common';

@UseGuards(JwtAuthGuard)
@Controller('vehicle')
export class VehicleController {
  constructor(private createVehicle: CreateVehicle) {}

  async create(@Body() data: any) {
    return this.createVehicle.execute(data);
  }
}
