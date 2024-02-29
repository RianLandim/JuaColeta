import { createId } from '@paralleldrive/cuid2';
import { Feedback } from './feedback';
import { makeUser } from '@test/factories/user.factory';
import { makeFeedback } from '@test/factories/feedback.factory';
import { User } from './user';

describe('feedback entity', () => {
  it('should be able to create an feedback instace', () => {
    const feedback = new Feedback({
      title: 'teste',
      category: 'teste',
      score: '5',
      userId: createId(),
    });

    expect(feedback).toBeInstanceOf(Feedback);
  });

  it('should be able to create an feedback instance connected with user', () => {
    const user = makeUser();
    const feedback = makeFeedback({
      userId: user.id,
      user: user,
    });

    expect(feedback).toBeInstanceOf(Feedback);
    expect(user).toBeInstanceOf(User);
    expect(feedback).toEqual(
      expect.objectContaining({
        user: user,
        userId: user.id,
      }),
    );
  });
});
