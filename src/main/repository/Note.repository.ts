import { Repository } from "./Repository";
import { Note } from "../models/Note";
import { InternalServerError } from "../error/InternalServerError";
import { NotFoundError } from "../error/NotFoundError";
import { City } from "../models/City";

type NoteRow = {
  id: string;
  number_note: number;
  client: string;
  emission_date: string;
  address?: string;
  cityId: string;
  routeId: string;
  volume: number;
  tot_value: number;
  weight: number;
  checker: string;
};

export class NoteRepository extends Repository {
  public saveNote(note: Note): void {
    const stmt = this.db.prepare(`
      INSERT INTO notes (
        id,
        number_note,
        client,
        emission_date,
        address,
        cityId,
        routeId,
        volume,
        tot_value,
        weight,
        checker
      ) VALUES (
        @id,
        @number_note,
        @client,
        @emission_date,
        @address,
        @cityId,
        @routeId,
        @volume,
        @tot_value,
        @weight,
        @checker
      )
    `);

    try {
      const info = stmt.run({
        id: note.id,
        number_note: note.numberNote,
        client: note.client,
        emission_date: note.emissionDate.toISOString(),
        address: note.address ?? "Sem endereço",
        cityId: note.city.id,
        routeId: note.route.id,
        volume: note.volumes,
        tot_value: note.totValue,
        weight: note.weight,
        checker: note.checker,
      });

      if (info.changes === 0) {
        throw new InternalServerError("Cadastro não realizado");
      }
    } catch (error) {
      throw new Error(error);
    }
  }

  public getAllNotes(): Note[] {
    const stmt = this.db.prepare("SELECT * FROM notes");

    try {
      const response = stmt.all() as NoteRow[];

      if (response.length > 0)
        throw new NotFoundError("Nenhum registro encontrado");

      return response.map(note => return new Note({
      }, note.id))
    } catch (error) {}
  }
}
