import { AddNotification } from '@app/usecases/notification/add-notification.usecase';
import { GetNotifications } from '@app/usecases/notification/get-notification.usecase';
import { Body, Controller, Get, Post } from '@nestjs/common';
import { AddNotificationDTO } from '../dtos/add-notification.dto';

@Controller('notification')
export class NotificationController {
  constructor(
    private addNotification: AddNotification,
    private getNotification: GetNotifications,
  ) {}

  @Post()
  async add(@Body() data: AddNotificationDTO) {
    return this.addNotification.execute(data);
  }

  @Get()
  async getAll() {
    return this.getNotification.execute();
  }
}
