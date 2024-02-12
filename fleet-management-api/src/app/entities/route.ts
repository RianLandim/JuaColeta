import { createId } from '@paralleldrive/cuid2';
import { Replace } from '@utils/helpers/replace';

export type RouteProps = {
  externalId?: string | null;

  vehicleId: string;

  startPointLat: string;
  startPointLon: string;
  endPointLat: string;
  endPointLon: string;

  duration: number;
  distance: number;

  createdAt: Date;
  updatedAt: Date;
};

export class Route {
  private _id: string;
  private props: RouteProps;

  constructor(
    props: Replace<
      RouteProps,
      { id?: string; createdAt?: Date; updatedAt?: Date }
    >,
  ) {
    this._id = props?.id ?? createId();
    this.props = {
      externalId: props.externalId,
      vehicleId: props.vehicleId,

      startPointLat: props.startPointLat,
      startPointLon: props.startPointLon,

      endPointLat: props.endPointLat,
      endPointLon: props.endPointLon,

      distance: props.distance,
      duration: props.duration,

      createdAt: props?.createdAt ?? new Date(),
      updatedAt: props?.updatedAt ?? new Date(),
    };
  }

  public get id() {
    return this._id;
  }

  public get externalId() {
    return this.props.externalId;
  }

  public get vehicleId() {
    return this.props.vehicleId;
  }

  public get startPointLat() {
    return this.props.startPointLat;
  }

  public get startPointLon() {
    return this.props.startPointLon;
  }

  public get endPointLat() {
    return this.props.endPointLat;
  }

  public get endPointLon() {
    return this.props.endPointLon;
  }

  public get distance() {
    return this.props.distance;
  }

  public get duration() {
    return this.props.duration;
  }

  public get createdAt() {
    return this.props.createdAt;
  }

  public get updatedAt() {
    return this.props.updatedAt;
  }
}
