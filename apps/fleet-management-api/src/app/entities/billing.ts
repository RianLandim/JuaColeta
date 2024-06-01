import { createId } from '@paralleldrive/cuid2';
import { Replace } from '@utils/helpers/replace';
import { Company } from './company';

type BillingStatus = 'DEMO' | 'SUBSCRIBED';

interface BillingProps {
  status: BillingStatus;
  dueIn: Date;
  companyId: string;
  company?: Company;
  createdAt: Date;
  updatedAt: Date;
}

export class Billing {
  private _id: string;
  private props: BillingProps;

  constructor(
    props: Replace<BillingProps, { createdAt?: Date; updatedAt?: Date }>,
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

  get status() {
    return this.props.status;
  }

  get dueIn() {
    return this.props.dueIn;
  }

  get companyId() {
    return this.props.companyId;
  }

  get company() {
    return this.props.company;
  }

  get createdAt() {
    return this.props.createdAt;
  }

  get updatedAt() {
    return this.props.updatedAt;
  }
}
