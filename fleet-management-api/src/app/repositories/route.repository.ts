import { Route } from '@app/entities/route';

export abstract class RouteRepository {
  abstract create(route: Route): Promise<void>;
  abstract listById(id: string): Promise<Route>;
}
