import { randomUUID } from "crypto";

interface RouteSchema {
  name: string;
  description: string;
}

export class Route {
  private _id: string;
  private props: RouteSchema;

  constructor(props: RouteSchema, id?: string) {
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

  get name(): string {
    return this.props.name;
  }

  get description(): string {
    return this.props.description;
  }
}
