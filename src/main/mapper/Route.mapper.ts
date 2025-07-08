import { Route } from "../models/Route";

export interface IRouteMapper {
  id: string;
  name: string;
  description: string;
}

export class RouteMapper {
  static toRenderer(route: Route): IRouteMapper {
    return {
      id: route.id,
      name: route.name,
      description: route.description,
    };
  }
}
