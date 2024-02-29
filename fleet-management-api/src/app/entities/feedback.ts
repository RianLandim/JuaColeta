import { createId } from '@paralleldrive/cuid2';
import { Replace } from '@utils/helpers/replace';
import { User } from './user';

interface FeedbackProps {
  title: string;
  category: string;
  score: string;
  userId: string;
  user?: User;
  createdAt: Date;
  updatedAt: Date;
}

export class Feedback {
  private _id: string;
  private props: FeedbackProps;

  constructor(
    props: Replace<FeedbackProps, { createdAt?: Date; updatedAt?: Date }>,
    id?: string,
  ) {
    this.props = {
      ...props,
      createdAt: props.createdAt ?? new Date(),
      updatedAt: props.updatedAt ?? new Date(),
    };

    this._id = id ?? createId();
  }

  get id() {
    return this._id;
  }

  get category() {
    return this.props.category;
  }

  get title() {
    return this.props.title;
  }

  get score() {
    return this.props.score;
  }

  get userId() {
    return this.props.userId;
  }

  get user() {
    return this.props.user;
  }

  get createdAt() {
    return this.props.createdAt;
  }
  get updatedAt() {
    return this.props.updatedAt;
  }
}
