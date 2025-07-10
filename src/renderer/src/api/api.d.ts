import type { ICity } from "../interfaces/ICity";
import type { IRoute } from "../interfaces/IRoute";

// Types (responses)
import type { IGetAllCities } from "./cities/IGetAllCities";
import type { IGetAllRoutes } from "./routes/IGetAllRoutes";

export {};

declare global {
  interface Window {
    api: {
      // Cities
      getAllCities: () => Promise<IGetAllCities>;

      // Routes
      getAllRoutes: () => Promise<IGetAllRoutes>;

      // Notes
      saveNote: (props) => Promise<void>;

      // App
      appQuit: () => void;
    };
  }
}
