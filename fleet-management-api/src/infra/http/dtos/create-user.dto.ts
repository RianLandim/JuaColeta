import { IsEmail, IsEnum, IsOptional, IsString } from 'class-validator';

export class CreateUserDto {
  @IsString()
  @IsEmail()
  email: string;

  @IsString()
  password: string;

  @IsString()
  name: string;

  @IsString()
  @IsOptional()
  license?: string | null;

  @IsString()
  cellphone: string;

  @IsString()
  @IsEnum(['ADMIN', 'COMPANY_ADMIN', 'DRIVER'])
  role: 'ADMIN' | 'COMPANY_ADMIN' | 'DRIVER';
}
