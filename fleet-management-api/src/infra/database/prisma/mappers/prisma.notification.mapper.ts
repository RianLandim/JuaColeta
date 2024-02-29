import { Notification } from '@app/entities/notification';
import { Prisma } from '@prisma/client';

export class PrismaNotificationMapper {
  static toPrisma(notification: Notification): Prisma.NotificationCreateInput {
    return {
      id: notification.id,
      category: notification.category,
      message: notification.message,
      title: notification.title,
      createdAt: notification.createdAt,
      updatedAt: notification.updatedAt,
    };
  }
}
