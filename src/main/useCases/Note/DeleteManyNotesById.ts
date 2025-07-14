import { NotFoundError } from "../../error/NotFoundError";
import { NoteRepository } from "../../repository/Note.repository";

interface DeleteManyNotesByIdUseCaseRequest {
  ids: string[];
}

interface DeleteManyNotesByIdUseCaseResponse {
  code: number;
  message: string;
}

export class DeleteManyNotesByIdUseCase {
  static async execute(
    props: DeleteManyNotesByIdUseCaseRequest
  ): Promise<DeleteManyNotesByIdUseCaseResponse> {
    const { ids } = props;
    const noteRepository = new NoteRepository();

    try {
      noteRepository.deleteManyNotes(ids);

      return {
        code: 200,
        message: "Requisição realizada com sucesso !",
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
