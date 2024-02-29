import { NotificationRepository } from '@app/repositories/notification.repository';
import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma.service';
import { Notification } from '@app/entities/notification';
import { PrismaNotificationMapper } from '../mappers/prisma.notification.mapper';

@Injectable()
export class PrismaNotificationRepository implements NotificationRepository {
  constructor(private prisma: PrismaService) {}
  async addNotification(notification: Notification): Promise<void> {
    const rawNotification = PrismaNotificationMapper.toPrisma(notification);

    await this.prisma.notification.create({
      data: rawNotification,
    });
  }

  async getNotifications(): Promise<Notification[]> {
    const prismaNotifications = await this.prisma.notification.findMany();

    const notifications = prismaNotifications.map(
      (n) => new Notification(n, n.id),
    );

    return notifications;
  }
}
