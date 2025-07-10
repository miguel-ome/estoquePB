import { NotFoundError } from "../../error/NotFoundError";
import { UnprocessableEntity } from "../../error/UnprocessableEntityError";
import { IRouteMapper, RouteMapper } from "../../mapper/Route.mapper";
import { Note } from "../../models/Note";
import { NoteRepository } from "../../repository/Note.repository";
import { RouteRepository } from "../../repository/Route.repository";
import { CityRepository } from "../../repository/City.repository";
import { InternalServerError } from "../../error/InternalServerError";

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
      const route = routeRepository.getRouteById(props.routeId);
      const city = cityRepository.getCityById(props.cityId);

      const note = new Note({
        checker: props.checker,
        city,
        client: props.client,
        emissionDate: props.emissionDate,
        numberNote: props.numberNote,
        route,
        totValue: props.totValue,
        volumes: props.volumes,
        weight: props.weight,
        address: props.address,
      });

      noteRepository.saveNote(note);
      return {
        code: 200,
        message: "Requisição realizada com sucesso",
      };
    } catch (error) {
      if (error instanceof UnprocessableEntity || InternalServerError)
        return {
          code: error.code,
          message: error.message,
        };
      return {
        code: 500,
        message: "Erro de sistema interno",
      };
    }
  }
}
