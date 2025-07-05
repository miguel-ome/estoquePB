import { contextBridge, ipcRenderer } from "electron";

contextBridge.exposeInMainWorld("api", {
  getAllCities: () => ipcRenderer.invoke("getAllCities"),
});
