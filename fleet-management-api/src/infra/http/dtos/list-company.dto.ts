import { IsOptional, IsString } from 'class-validator';

export class ListCompanyDTO {
  @IsString()
  @IsOptional()
  socialName?: string;

  @IsString()
  @IsOptional()
  cnpj?: string;

  @IsString()
  @IsOptional()
  page?: string;

  @IsString()
  @IsOptional()
  offset?: string;
}
