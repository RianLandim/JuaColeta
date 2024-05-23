import { createId } from '@paralleldrive/cuid2';
import { Replace } from 'src/utils/helpers/replace';
import { Vehicle } from './vehicle';

interface UserProps {
  email: string;
  password: string;
  name: string;
  cellphone: string;
  license?: string | null;
  role: 'ADMIN' | 'COMPANY_ADMIN' | 'DRIVER' | 'CLIENT';
  vehicle?: Vehicle;
  createdAt: Date;
  updatedAt: Date;
}

export class User {
  private _id: string;
  private props: UserProps;

  constructor(
    props: Replace<UserProps, { createdAt?: Date; updatedAt?: Date }>,
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

  get email() {
    return this.props.email;
  }

  get password() {
    return this.props.password;
  }

  get name() {
    return this.props.name;
  }

  get license() {
    return this.props.license;
  }

  get role() {
    return this.props.role;
  }

  get cellphone() {
    return this.props.cellphone;
  }

  get vehicle() {
    return this.props.vehicle;
  }

  get createdAt() {
    return this.props.createdAt;
  }

  get updatedAt() {
    return this.props.updatedAt;
  }
}
