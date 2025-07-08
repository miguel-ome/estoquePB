import { Repository } from "./Repository";
import { NotFoundError } from "../error/NotFoundError";
import { Route } from "../models/Route";

type RouteRow = {
  id: string;
  name: string;
  description: string;
};

export class RouteRepository extends Repository {
  public getAllRoutes(): Route[] {
    const response = this.db
      .prepare("SELECT * FROM routes")
      .all() as RouteRow[];

    if (response.length == 0) {
      throw new NotFoundError("Erro na busca dos registro da tabela routes");
    }

    const routes = response.map((route) => {
      return new Route(
        {
          name: route.name,
          description: route.description,
        },
        route.id
      );
    });

    return routes;
  }
}
