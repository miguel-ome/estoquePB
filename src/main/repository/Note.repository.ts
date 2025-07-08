import { Repository } from "./Repository";
import { NotFoundError } from "../error/NotFoundError";
import { Note } from "../models/Note";

export class NoteRepository extends Repository {
  public saveNote(note: Note): void {}
}
