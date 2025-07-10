import { Note } from "../models/Note";

export interface INoteMapper {
  id: string;
  numberNote: number;
  client: string;
  emissionDate: Date;
  address?: string;
  cityName: string;
  cityUf: string;
  routeName: string;
  volume: number;
  totValue: number;
  weight: number;
  checker: string;
}

export class NoteMapper {
  static toRenderer(note: Note): INoteMapper {
    return {
      id: note.id,
      checker: note.checker,
      cityName: note.city.name,
      cityUf: note.city.uf,
      client: note.client,
      emissionDate: note.emissionDate,
      numberNote: note.numberNote,
      routeName: note.route.name,
      totValue: note.totValue,
      volume: note.volumes,
      weight: note.weight,
      address: note.address,
    };
  }
}
