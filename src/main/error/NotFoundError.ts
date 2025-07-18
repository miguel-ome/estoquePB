export class NotFoundError extends Error {
  public code: number;

  constructor(message: string) {
    super(message);
    this.name = "Not Found";
    this.code = 404;
  }
}
