import type { ICity } from "../../interfaces/ICity";
import type { IResponse } from "../IResponse";

export interface IGetAllCities extends IResponse {
  body?: ICity[];
}
