import { NotFoundError } from "../../error/NotFoundError";
import { City } from "../../models/City";
import { CityRepository } from "../../repository/City.repository";
import { CityMapper, ICityMapper } from "../../mapper/City.mapper";

interface GetAllCitiesUseCaseResponse {
  code: number;
  message: string;
  body?: ICityMapper[];
}

export class GetAllCitiesUseCase {
  static async execute(): Promise<GetAllCitiesUseCaseResponse> {
    const cityRepository = new CityRepository();

    try {
      const cities = cityRepository.getAllCities();
      return {
        code: 200,
        message: "Requisição realizada com sucesso",
        body: cities.map((city) => CityMapper.toRenderer(city)),
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
