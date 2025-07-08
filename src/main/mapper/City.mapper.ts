import { City } from "../models/City";

export interface ICityMapper {
  id: number;
  name: string;
  code: number;
  uf: string;
}

export class CityMapper {
  static toRenderer(city: City): ICityMapper {
    return {
      id: city.id,
      code: city.code,
      name: city.name,
      uf: city.uf,
    };
  }
}
