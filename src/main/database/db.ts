import path from "path";

import { app } from "electron";

import Database from "better-sqlite3";

export const db = new Database(
  path.join(app.getPath("userData"), "database.db")
);
