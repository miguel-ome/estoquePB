import type { ICity } from "../interfaces/ICity";

export {};

declare global {
  interface Window {
    api: {
      getAllCities: () => Promise<ICity[]>;
    };
  }
}
