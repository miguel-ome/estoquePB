import { NotFoundError } from "../../error/NotFoundError";
import { NoteRepository } from "../../repository/Note.repository";

interface DeleteNoteByIduseCaseRequest {
  id: string;
}

interface DeleteNoteByIduseCaseResponse {
  code: number;
  message: string;
}

export class DeleteNoteByIdUseCase {
  static async execute(
    props: DeleteNoteByIduseCaseRequest
  ): Promise<DeleteNoteByIduseCaseResponse> {
    const { id } = props;
    const noteRepository = new NoteRepository();

    try {
      noteRepository.deleteNoteById(id);

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
