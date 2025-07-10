import { NotFoundError } from "../../error/NotFoundError";
import { RouteRepository } from "../../repository/Route.repository";
import { IRouteMapper, RouteMapper } from "../../mapper/Route.mapper";

interface GetAllRoutesUseCaseResponse {
  code: number;
  message: string;
  body?: IRouteMapper[];
}

export class GetAllRoutesUseCase {
  static async execute(): Promise<GetAllRoutesUseCaseResponse> {
    const routeRepository = new RouteRepository();

    try {
      const routes = routeRepository.getAllRoutes();
      return {
        code: 200,
        message: "Requisição realizada com sucesso",
        body: routes.map((route) => RouteMapper.toRenderer(route)),
      };
    } catch (error) {
      if (error instanceof NotFoundError) {
        return {
          code: error.code,
          message: error.message,
        };
      }

      return {
        code: 500,
        message: "Erro de sistema interno",
      };
    }
  }
}
