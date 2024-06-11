import { InMemoryNotificationsRepository } from '@test/repositories/notifications.repository';
import { AddNotification } from './add-notification.usecase';
import { makeNotification } from '@test/factories/notification.factory';

describe('add notification [usecase]', () => {
  const notificationRepository = new InMemoryNotificationsRepository();
  const addNotification = new AddNotification(notificationRepository);

  it('Should be able to create a notification', () => {
    const notification = makeNotification();

    expect(
      async () =>
        await addNotification.execute({
          category: notification.category,
          title: notification.title,
          message: notification.message,
        }),
    ).not.toThrow();
  });
});
