import { Type } from 'class-transformer';
import { IsNumber, IsString, ValidateNested } from 'class-validator';

class CreateAddressDto {
  @IsNumber()
  number: number;

  @IsString()
  street: string;

  @IsString()
  city: string;

  @IsString()
  state: string;

  @IsString()
  country: string;

  @IsString()
  district: string;

  @IsString()
  zipCode: string;
}

export class CreateCompanyDTO {
  @IsString()
  socialName: string;

  @IsString()
  cnpj: string;

  @ValidateNested()
  @Type(() => CreateAddressDto)
  address: CreateAddressDto;
}
