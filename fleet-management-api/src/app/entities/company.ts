import { Replace } from '@utils/helpers/replace';
import { Address } from './address';
import { createId } from '@paralleldrive/cuid2';

interface CompanyProps {
  cnpj: string;
  socialName: string;
  addressId: string;
  address: Address;
  createdAt: Date;
  updatedAt: Date;
}

export class Company {
  private _id: string;
  private props: CompanyProps;

  constructor(
    props: Replace<
      CompanyProps,
      { createdAt?: Date; updatedAt?: Date; id?: string }
    >,
  ) {
    this._id = props.id ?? createId();
    this.props = {
      ...props,
      createdAt: props.createdAt ?? new Date(),
      updatedAt: props.updatedAt ?? new Date(),
    };
  }

  get id() {
    return this._id;
  }

  get cnpj() {
    return this.props.cnpj;
  }

  get socialName() {
    return this.props.socialName;
  }

  get addressId() {
    return this.props.addressId;
  }

  get address() {
    return this.props.address;
  }

  get createdAt() {
    return this.props.createdAt;
  }

  get updatedAt() {
    return this.props.updatedAt;
  }
}
