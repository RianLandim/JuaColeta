import { Notification } from '@app/entities/notification';
import { NotificationRepository } from '@app/repositories/notification.repository';

export class InMemoryNotificationsRepository implements NotificationRepository {
  notification: Notification[] = [];

  async addNotification(notification: Notification): Promise<void> {
    this.notification.push(notification);
  }

  async getNotifications(): Promise<Notification[]> {
    return this.notification;
  }
}
