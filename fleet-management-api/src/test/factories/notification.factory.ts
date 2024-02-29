import { Notification } from '@app/entities/notification';
import { fakerPT_BR as faker } from '@faker-js/faker';

type Override = Partial<Notification>;

export function makeNotification(override?: Override) {
  return new Notification({
    title: faker.lorem.slug(),
    category: faker.airline.aircraftType(),
    message: faker.word.words(),
    ...override,
  });
}
