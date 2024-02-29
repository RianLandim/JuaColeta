import { Feedback } from '@app/entities/feedback';
import { fakerPT_BR as faker } from '@faker-js/faker';
import { makeUser } from './user.factory';

type Override = Partial<Feedback>;

export function makeFeedback(override?: Override) {
  const user = makeUser();

  return new Feedback({
    title: faker.lorem.slug(),
    category: faker.lorem.text(),
    score: '5',
    user: user,
    userId: user.id,
    ...override,
  });
}
