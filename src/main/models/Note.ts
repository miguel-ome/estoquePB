import { randomUUID } from "crypto";
import { City } from "./City";
import { Route } from "./Route";

interface NoteSchema {
  numberNote: number;
  client: string;
  emissionDate: Date;
  address?: string;
  city: City;
  route: Route;
  volumes: number;
  totValue: number;
  weight: number;
  checker: string;
}

export class Note {
  private _id: string;
  private props: NoteSchema;

  constructor(props: NoteSchema, id?: string) {
    this.props = {
      ...props,
    };
    this._id = id || randomUUID();
  }

  /////////////
  // Getters
  /////////////
  get id(): string {
    return this._id;
  }

  get numberNote(): number {
    return this.props.numberNote;
  }

  get client(): string {
    return this.props.client;
  }

  get emissionDate(): Date {
    return this.props.emissionDate;
  }

  get address(): string | undefined {
    return this.props?.address;
  }

  get city(): City {
    return this.props.city;
  }

  get route(): Route {
    return this.props.route;
  }

  get volumes(): number {
    return this.props.volumes;
  }

  get totValue(): number {
    return this.props.totValue;
  }

  get weight(): number {
    return this.props.weight;
  }

  get checker(): string {
    return this.props.checker;
  }
}
