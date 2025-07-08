import { Repository } from "./Repository";
import { NotFoundError } from "../error/NotFoundError";
import { City } from "../models/City";

type CityRow = {
  id: number;
  name: string;
  code: number;
  uf: string;
};

export class CityRepository extends Repository {
  public getAllCities(): City[] {
    const response = this.db.prepare("SELECT * FROM cities").all() as CityRow[];

    if (response.length == 0) {
      throw new NotFoundError("Erro na busca dos registro da tabela cities");
    }

    return response.map((city) => {
      return new City({
        code: city.code,
        id: city.id,
        name: city.name,
        uf: city.uf,
      });
    });
  }

  public getCityById(id: number): City {
    const responseCity = this.db
      .prepare("SELECT * FROM cities WHERE id = ?")
      .get(id) as CityRow;

    if (!responseCity) {
      throw new NotFoundError("Cidade não existe");
    }

    return new City({
      id: responseCity.id,
      code: responseCity.code,
      name: responseCity.name,
      uf: responseCity.uf,
    });
  }
}
