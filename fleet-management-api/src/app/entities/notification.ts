import { createId } from '@paralleldrive/cuid2';
import { Replace } from '@utils/helpers/replace';

interface NotificationProps {
  category: string;
  title: string;
  message: string;
  createdAt: Date;
  updatedAt: Date;
}

export class Notification {
  private _id: string;
  private props: NotificationProps;

  constructor(
    props: Replace<NotificationProps, { createdAt?: Date; updatedAt?: Date }>,
    id?: string,
  ) {
    this._id = id ?? createId();
    this.props = {
      ...props,
      createdAt: props.createdAt ?? new Date(),
      updatedAt: props.updatedAt ?? new Date(),
    };
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

  get message() {
    return this.props.message;
  }

  get createdAt() {
    return this.props.createdAt;
  }

  get updatedAt() {
    return this.props.updatedAt;
  }
}
