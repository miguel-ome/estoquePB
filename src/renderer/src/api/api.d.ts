import type { ICity } from "../interfaces/ICity";
import type { IRoute } from "../interfaces/IRoute";

export {};

declare global {
  interface Window {
    api: {
      // Cities
      getAllCities: () => Promise<ICity[]>;

      // Routes
      getAllRoutes: () => Promise<IRoute[]>;

      // App
      appQuit: () => void;
    };
  }
}
