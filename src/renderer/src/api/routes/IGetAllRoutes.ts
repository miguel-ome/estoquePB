import type { IRoute } from "../../interfaces/IRoute";
import type { IResponse } from "../IResponse";

export interface IGetAllRoutes extends IResponse {
  body?: IRoute[];
}
