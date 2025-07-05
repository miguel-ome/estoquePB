interface CitySchema {
  id: number;
  name: string;
  code: number;
  uf: string;
}

export class City {
  private props: CitySchema;

  constructor(props: CitySchema) {
    this.props = {
      ...props,
    };
  }

  /////////////
  // Getters
  /////////////
  get id(): number {
    return this.props.id;
  }

  get name(): string {
    return this.props.name;
  }

  get code(): number {
    return this.props.code;
  }

  get uf(): string {
    return this.props.uf;
  }
}
