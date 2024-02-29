import { IsString } from 'class-validator';

export class AddNotificationDTO {
  @IsString()
  title: string;

  @IsString()
  message: string;

  @IsString()
  category: string;
}
