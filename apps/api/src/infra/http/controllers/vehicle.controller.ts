import { CreateVehicle } from '@app/usecases/vehicle/add-vehicle.usecase';
import { ListVehicle } from '@app/usecases/vehicle/get-vehicle.usecase';
import {
  Body,
  Controller,
  Get,
  Param,
  Post,
  Put,
  UseGuards,
} from '@nestjs/common';
import { CreateVehicleDTO } from '../dtos/create-vehicle.dto';
import { VehicleViewModel } from '../view-model/vehicle.view-model';
import { DeleteVehicle } from '@app/usecases/vehicle/delete-vehicle';
import { UpdateVehicleDTO } from '../dtos/update-vehicle.dto';
import { UpdateVehicle } from '@app/usecases/vehicle/update-vehicle';
import { ListVehicleById } from '@app/usecases/vehicle/get-vehicle-by-id';
import { JwtAuthGuard } from '@infra/authentication/guards/auth.guard';
import { RolesGuard } from '@infra/authentication/guards/role.guard';
import { Roles } from '@utils/decorator/role.decorator';

@UseGuards(JwtAuthGuard)
@UseGuards(RolesGuard)
@Roles(['ADMIN', 'COMPANY_ADMIN'])
@Controller('vehicle')
export class VehicleController {
  constructor(
    private createVehicle: CreateVehicle,
    private listVehicle: ListVehicle,
    private deleteVehicle: DeleteVehicle,
    private updateVehicle: UpdateVehicle,
    private listVehicleById: ListVehicleById,
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

  @Get(':id/list')
  async listById(@Param('id') id: string) {
    const vehicle = await this.listVehicleById.execute(id);

    return VehicleViewModel.toHttp(vehicle);
  }

  @Put()
  async update(@Body() data: UpdateVehicleDTO) {
    await this.updateVehicle.execute(data);

    return {
      message: 'Editado com sucesso',
    };
  }

  @Put(':id')
  async delete(@Param('id') id: string) {
    await this.deleteVehicle.execute(id);

    return {
      message: 'Inativado com sucesso',
    };
  }
}
