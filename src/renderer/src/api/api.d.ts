import type { ICity } from "../interfaces/ICity";

export {};

declare global {
  interface Window {
    api: {
      // Cities
      getAllCities: () => Promise<ICity[]>;

      // App
      appQuit: () => void;
    };
  }
}
