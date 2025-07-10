import { contextBridge, ipcRenderer } from "electron";

contextBridge.exposeInMainWorld("api", {
  // Cities
  getAllCities: () => ipcRenderer.invoke("getAllCities"),

  // Routes
  getAllRoutes: () => ipcRenderer.invoke("getAllRoutes"),

  // Notes
  saveNote: (props) => ipcRenderer.invoke("saveNote", props),

  // App
  appQuit: () => ipcRenderer.invoke("appQuit"),
});
