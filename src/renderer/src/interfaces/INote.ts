export interface INote {
  id: string;
  checker: string;
  cityName: string;
  cityUf: string;
  client: string;
  emissionDate: Date;
  numberNote: string;
  routeName: string;
  totValue: number;
  volume: number;
  weight: number;
  address?: string;
}
