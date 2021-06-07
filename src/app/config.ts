import { InjectionToken } from "@angular/core";
export interface IBaseUrl {
  domain: string;
  port: number;
}
export const BASE_URL = new InjectionToken('BASE_URL');
