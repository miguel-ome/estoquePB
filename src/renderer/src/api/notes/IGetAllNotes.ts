import type { INote } from "../../interfaces/INote";
import type { IResponse } from "../IResponse";

export interface IGetAllNotes extends IResponse {
  body?: INote[];
}
