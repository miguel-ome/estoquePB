import { NotFoundError } from "../../error/NotFoundError";
import { NoteMapper, type INoteMapper } from "../../mapper/Note.mapper";
import { NoteRepository } from "../../repository/Note.repository";

interface GetAllNotesUseCaseResponse {
  code: number;
  message: string;
  body?: INoteMapper[];
}

export class GetAllNotesUseCase {
  static async execute(): Promise<GetAllNotesUseCaseResponse> {
    const noteRepository = new NoteRepository();

    try {
      const notes = noteRepository.getAllNotes();

      return {
        code: 200,
        message: "Requisição realizada com sucesso !",
        body: notes.map((note) => NoteMapper.toRenderer(note)),
      };
    } catch (error) {
      if (error instanceof NotFoundError) {
        return {
          code: error.code,
          message: error.message,
        };
      } else {
        return {
          code: 500,
          message: "Erro de sistema interno",
        };
      }
    }
  }
}
