import { VehicleProps } from '@app/entities/vehicle';
import { VehicleCategoryProps } from '@utils/enum/vehicle-category.enum';
import {
  IsBoolean,
  IsDate,
  IsEnum,
  IsNumber,
  IsOptional,
  IsString,
} from 'class-validator';

export class CreateVehicleDTO implements VehicleProps {
  @IsString()
  model: string;

  @IsString()
  fabricator: string;

  @IsString()
  plate: string;

  @IsString()
  color: string;

  @IsString()
  year: string;

  @IsString()
  renavam: string;

  @IsEnum(['A', 'B', 'C', 'D', 'E'])
  category: VehicleCategoryProps;

  @IsBoolean()
  isSecured: boolean;

  @IsString()
  companyId: string;

  @IsDate()
  createdAt: Date;

  @IsDate()
  updatedAt: Date;

  @IsOptional()
  @IsNumber()
  averageConsume?: number | null;

  @IsOptional()
  @IsNumber()
  capacity?: number | null;
}
