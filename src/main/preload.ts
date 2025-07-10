import { contextBridge, ipcRenderer } from "electron";

contextBridge.exposeInMainWorld("api", {
  // Cities
  getAllCities: () => ipcRenderer.invoke("getAllCities"),

  // Routes
  getAllRoutes: () => ipcRenderer.invoke("getAllRoutes"),

  // Notes
  saveNote: (props) => ipcRenderer.invoke("saveNote", props),
  getAllNotes: () => ipcRenderer.invoke("getAllNotes"),

  // App
  appQuit: () => ipcRenderer.invoke("appQuit"),
});
