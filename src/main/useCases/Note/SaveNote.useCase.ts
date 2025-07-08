import { NotFoundError } from "../../error/NotFoundError";
import { IRouteMapper, RouteMapper } from "../../mapper/Route.mapper";
import { Note } from "../../models/Note";
import { NoteRepository } from "../../repository/Note.repository";
import { RouteRepository } from "../../repository/Route.repository";
import { CityRepository } from "../../repository/City.repository";

interface SaveNoteUseCaseRequest {
  numberNote: number;
  client: string;
  emissionDate: Date;
  address?: string;
  cityId: number;
  routeId: string;
  volumes: number;
  totValue: number;
  weight: number;
  checker: string;
}

interface SaveNoteUseCaseResponse {
  code: number;
  message: string;
}

export class SaveNoteUseCase {
  static async execute(
    props: SaveNoteUseCaseRequest
  ): Promise<SaveNoteUseCaseResponse> {
    const noteRepository = new NoteRepository();
    const routeRepository = new RouteRepository();
    const cityRepository = new CityRepository();

    try {
      const routes = noteRepository.saveNote();
      return {
        code: 200,
        message: "Requisição realizada com sucesso",
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
