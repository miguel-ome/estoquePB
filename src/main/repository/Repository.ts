import { Database } from "better-sqlite3";

import { db } from "../database/db";

export class Repository {
  protected db: Database = db;
}
