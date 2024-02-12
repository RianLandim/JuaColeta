import { Route, RouteProps as CreateRouteRequest } from '@app/entities/route';
import { RouteRepository } from '@app/repositories/route.repository';
import { Injectable } from '@nestjs/common';

export interface CreateRouteResponse {
  route: Route;
}

@Injectable()
export class CreateRoute {
  constructor(private routeRepository: RouteRepository) {}

  async execute(request: CreateRouteRequest): Promise<CreateRouteResponse> {
    const route = new Route(request);

    await this.routeRepository.create(route);

    return { route };
  }
}
