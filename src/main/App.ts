import path from "path";

import { app, BrowserWindow, ipcMain } from "electron";
import { Database } from "better-sqlite3";
import { GetAllCitiesUseCase } from "./useCases/City/GetAllCities.useCase";

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
      width: 800,
      height: 600,
      webPreferences: {
        preload: path.join(__dirname, "preload.js"), // se usar preload
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
  }
}
