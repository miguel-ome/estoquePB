import path from "path";

import { app, BrowserWindow, ipcMain } from "electron";
import { Database } from "better-sqlite3";

// Cities
import { GetAllCitiesUseCase } from "./useCases/City/GetAllCities.useCase";

// Routes
import { GetAllRoutesUseCase } from "./useCases/Route/GetAllRoutes.useCase";

// Notes
import { SaveNoteUseCase } from "./useCases/Note/SaveNote.useCase";
import { GetAllNotesUseCase } from "./useCases/Note/GetAllNotes.useCase";

export class App {
  private db: Database;

  constructor(db: Database) {
    this.db = db;
  }

  public initialize(): void {
    app.whenReady().then(this.createWindow);

    this.windowAllClosed();
    this.routes();
  }

  private createWindow(): void {
    const win = new BrowserWindow({
      fullscreen: true,
      webPreferences: {
        preload: path.join(__dirname, "preload.js"),
        nodeIntegration: true,
        contextIsolation: true,
      },
    });

    if (true) {
      win.loadURL("http://localhost:5173");
    } else {
      win.loadFile(path.join(__dirname, "../renderer/index.html"));
    }
  }

  private windowAllClosed(): void {
    app.on("window-all-closed", () => {
      if (process.platform !== "darwin") app.quit();
    });
  }

  private routes(): void {
    // Cities
    ipcMain.handle("getAllCities", () => GetAllCitiesUseCase.execute());

    // Routes
    ipcMain.handle("getAllRoutes", () => GetAllRoutesUseCase.execute());

    // Notes
    ipcMain.handle("saveNote", (event, props) =>
      SaveNoteUseCase.execute(props)
    );
    ipcMain.handle("getAllNotes", () => GetAllNotesUseCase.execute());

    // App quit
    ipcMain.handle("appQuit", () => app.quit());
  }
}
