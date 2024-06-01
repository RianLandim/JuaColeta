import { NotificationRepository } from '@app/repositories/notification.repository';
import { Injectable } from '@nestjs/common';

@Injectable()
export class GetNotifications {
  constructor(private notificationRepository: NotificationRepository) {}

  async execute() {
    const notifications = await this.notificationRepository.getNotifications();

    return notifications;
  }
}
