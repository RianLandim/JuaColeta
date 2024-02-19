import { createId } from '@paralleldrive/cuid2';
import { VehicleCategoryProps } from '@utils/enum/vehicle-category.enum';
import { Replace } from '@utils/helpers/replace';

export interface VehicleProps {
  model: string;
  fabricator: string;
  plate: string;
  color: string;
  year: string;
  renavam: string;
  category: VehicleCategoryProps;
  averageConsume?: number | null;
  capacity?: number | null;
  isSecured: boolean;
  companyId: string;
  createdAt: Date;
  updatedAt: Date;
}

export class Vehicle {
  private _id: string;
  private props: VehicleProps;

  constructor(
    props: Replace<
      VehicleProps,
      { id?: string; createdAt?: Date; updatedAt?: Date }
    >,
  ) {
    this._id = props?.id ?? createId();
    this.props = {
      ...props,
      createdAt: props.createdAt ?? new Date(),
      updatedAt: props.updatedAt ?? new Date(),
    };
  }

  get id() {
    return this._id;
  }

  get fabricator() {
    return this.props.fabricator;
  }

  get model() {
    return this.props.model;
  }

  get plate() {
    return this.props.plate;
  }

  get color() {
    return this.props.color;
  }

  get year() {
    return this.props.year;
  }

  get category() {
    return this.props.category;
  }

  get isSecured() {
    return this.props.isSecured;
  }

  get companyId() {
    return this.props.companyId;
  }

  get renavam() {
    return this.props.renavam;
  }

  get averageConsume() {
    return this.props.averageConsume;
  }

  get capacity() {
    return this.props.capacity;
  }

  get createdAt() {
    return this.props.createdAt;
  }

  get updatedAt() {
    return this.props.updatedAt;
  }
}
