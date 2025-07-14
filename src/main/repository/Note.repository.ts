import { Repository } from "./Repository";
import { Note } from "../models/Note";
import { InternalServerError } from "../error/InternalServerError";
import { UnprocessableEntity } from "../error/UnprocessableEntityError";
import { NotFoundError } from "../error/NotFoundError";
import { City } from "../models/City";
import { Route } from "../models/Route";

type NoteRow = {
  id: string;
  number_note: number;
  client: string;
  emission_date: string;
  address: string;
  volume: number;
  tot_value: number;
  weight: number;
  checker: string;

  city_id: number;
  city_name: string;
  city_uf: string;
  city_code: number;

  route_id: string;
  route_name: string;
  route_description: string;
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
        throw new UnprocessableEntity(
          "Cadastro não realizado por inconsistência dos dados"
        );
      }
    } catch (error) {
      throw new InternalServerError("Error de processamento do sistema");
    }
  }

  public getAllNotes(): Note[] {
    const rows = this.db
      .prepare(
        `
      SELECT
        notes.id,
        notes.number_note,
        notes.client,
        notes.emission_date,
        notes.address,
        notes.volume,
        notes.tot_value,
        notes.weight,
        notes.checker,
        cities.id AS city_id,
        cities.name AS city_name,
        cities.code AS city_code,
        cities.uf AS city_uf,
        routes.id AS route_id,
        routes.name AS route_name,
        routes.description AS route_description
      FROM notes
      JOIN cities ON notes.cityId = cities.id
      JOIN routes ON notes.routeId = routes.id
    `
      )
      .all() as NoteRow[];

    if (!rows.length) {
      throw new NotFoundError("Nenhuma nota encontrada.");
    }

    return rows.map(
      (row) =>
        new Note(
          {
            numberNote: row.number_note,
            client: row.client,
            emissionDate: new Date(row.emission_date),
            address: row.address,
            volumes: row.volume,
            totValue: row.tot_value,
            weight: row.weight,
            checker: row.checker,
            city: new City({
              id: row.city_id,
              name: row.city_name,
              code: row.city_code,
              uf: row.city_uf,
            }),
            route: new Route(
              {
                name: row.route_name,
                description: row.route_description,
              },
              row.route_id
            ),
          },
          row.id
        )
    );
  }

  public deleteNoteById(id: string): void {
    const stmt = this.db.prepare("DELETE FROM notes WHERE id = ?");
    const info = stmt.run(id);

    if (info.changes === 0) {
      throw new NotFoundError("Nota não encontrada ou já foi removida.");
    }
  }

  public deleteManyNotes(notesToDelete: string[]): void {
    const placeholders = notesToDelete.map(() => "?").join(", ");
    const stmt = this.db.prepare(
      `DELETE FROM notes WHERE id IN (${placeholders})`
    );
    const info = stmt.run(...notesToDelete);

    if (info.changes === 0)
      throw new NotFoundError("Notas não encontradas ou já foram removidas");
  }
}
