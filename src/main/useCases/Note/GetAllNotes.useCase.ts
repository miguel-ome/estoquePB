import { NotFoundError } from "../../error/NotFoundError";
import { type INoteMapper, NoteMapper } from "../../mapper/Note.mapper";
import { Note } from "../../models/Note";
import { NoteRepository } from "../../repository/Note.repository";
import { RouteRepository } from "../../repository/Route.repository";
import { CityRepository } from "../../repository/City.repository";

interface SaveNoteUseCaseResponse {
  code: number;
  message: string;
  body: INoteMapper[];
}

export class SaveNoteUseCase {
  static async execute(): Promise<SaveNoteUseCaseResponse> {
    const noteRepository = new NoteRepository();

    try {
      const note = noteRepository.getAllNotes();

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
