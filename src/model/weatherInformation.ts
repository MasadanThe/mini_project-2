import type { Forecast } from "./forecast";

export interface WeatherInformation {
    name: string;
    icon: string;
    temperature: number;
    description: string;
    additionalInformation: string;

    forecast: Array<Forecast>;
  }