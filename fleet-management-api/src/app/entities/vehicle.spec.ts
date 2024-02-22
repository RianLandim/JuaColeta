import { makeVehicle } from '@test/factories/vehicle.factory';
import { Vehicle } from './vehicle';

describe('Vehicle Entity', () => {
  it('Should be able to create an vehicle entity instance', () => {
    const vehicle = new Vehicle(makeVehicle());

    expect(vehicle).toBeInstanceOf(Vehicle);
  });
});
