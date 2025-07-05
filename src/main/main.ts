import { App } from "./App";
import { db } from "./database/db";

const app = new App(db);

app.initialize();
