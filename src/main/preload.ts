import { contextBridge, ipcRenderer } from "electron";

contextBridge.exposeInMainWorld("api", {
  // Cities
  getAllCities: () => ipcRenderer.invoke("getAllCities"),

  // App
  appQuit: () => ipcRenderer.invoke("appQuit"),
});
