import { contextBridge, ipcRenderer } from "electron";

contextBridge.exposeInMainWorld("api", {
  // Cities
  getAllCities: () => ipcRenderer.invoke("getAllCities"),

  // Routes
  getAllRoutes: () => ipcRenderer.invoke("getAllRoutes"),

  // App
  appQuit: () => ipcRenderer.invoke("appQuit"),
});
