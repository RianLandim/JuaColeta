import { Notification } from '@app/entities/notification';

export abstract class NotificationRepository {
  abstract addNotification(notification: Notification): Promise<void>;
  abstract getNotifications(): Promise<Notification[]>;
}
