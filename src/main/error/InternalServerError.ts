export class InternalServerError extends Error {
  public code: number;

  constructor(message: string) {
    super(message);
    this.name = "Internal Server";
    this.code = 500;
  }
}
