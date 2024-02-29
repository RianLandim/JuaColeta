import { InMemoryNotificationsRepository } from '@test/repositories/notifications.repository';
import { GetNotifications } from './get-notification.usecase';
import { makeNotification } from '@test/factories/notification.factory';

describe('get notification [usecase]', () => {
  const notificationRepository = new InMemoryNotificationsRepository();
  const getNotifications = new GetNotifications(notificationRepository);
  it('Should be able to get a notification', async () => {
    const notification = makeNotification();

    notificationRepository.addNotification(notification);

    const storedNotifications = await getNotifications.execute();

    expect(storedNotifications).toEqual(
      expect.arrayContaining([
        expect.objectContaining({
          id: notification.id,
        }),
      ]),
    );
  });
});
