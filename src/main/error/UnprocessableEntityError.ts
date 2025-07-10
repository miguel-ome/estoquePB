export class UnprocessableEntity extends Error {
  public code: number;

  constructor(message: string) {
    super(message);
    this.name = "Unprocessable Entity";
    this.code = 422;
  }
}
