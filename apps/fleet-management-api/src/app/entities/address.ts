import { createId } from '@paralleldrive/cuid2';
import { Replace } from '@utils/helpers/replace';

interface AddressProps {
  number: number;
  street: string;
  city: string;
  state: string;
  district: string;
  country: string;
  zipCode: string;
  createdAt: Date;
  updatedAt: Date;
}

export class Address {
  private _id: string;
  private props: AddressProps;

  constructor(
    props: Replace<AddressProps, { createdAt?: Date; updatedAt?: Date }>,
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

  get number() {
    return this.props.number;
  }

  get street() {
    return this.props.street;
  }

  get city() {
    return this.props.city;
  }

  get state() {
    return this.props.state;
  }

  get district() {
    return this.props.district;
  }

  get country() {
    return this.props.country;
  }

  get zipCode() {
    return this.props.zipCode;
  }

  get createdAt() {
    return this.props.createdAt;
  }

  get updatedAt() {
    return this.props.updatedAt;
  }
}
