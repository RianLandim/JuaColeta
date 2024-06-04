import { Notification } from '@app/entities/notification';
import { NotificationRepository } from '@app/repositories/notification.repository';
import { Injectable } from '@nestjs/common';

interface AddNotificationRequest {
  message: string;
  category: string;
  title: string;
}

@Injectable()
export class AddNotification {
  constructor(private notificationRepository: NotificationRepository) {}

  async execute(request: AddNotificationRequest) {
    const notification = new Notification({
      category: request.category,
      message: request.message,
      title: request.title,
    });

    await this.notificationRepository.addNotification(notification);
  }
}
