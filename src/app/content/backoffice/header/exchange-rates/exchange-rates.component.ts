import { Component } from '@angular/core';
import { IRate, RateMode } from "./exchange-rates.directive";

@Component({
  selector: 'course-exchange-rates',
  templateUrl: './exchange-rates.component.html',
  styleUrls: ['./exchange-rates.component.css']
})
export class ExchangeRatesComponent {

  public rates: IRate[] = [
    {value: 1, currency: 'USD'},
    {value: 1.1, currency: 'EUR'},
    {value: 50, currency: 'RUB'},
  ]

  public autoPlayMode: RateMode = RateMode.OFF;

}
