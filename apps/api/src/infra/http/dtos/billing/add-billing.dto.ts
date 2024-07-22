import { IsEnum, IsNumber, IsString } from 'class-validator';
import { BillingStatus } from '@prisma/client';

export class AddBillingDTO {
  @IsNumber()
  dueIn: 30 | 180 | 360;

  @IsEnum(BillingStatus)
  status: BillingStatus;

  @IsString()
  companyId: string;

  @IsString()
  priceId: string;
}
