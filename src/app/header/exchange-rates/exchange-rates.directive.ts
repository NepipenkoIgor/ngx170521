import { Directive, Input, OnInit, TemplateRef, ViewContainerRef } from '@angular/core';

export interface IRate {
  value: number;
  currency: string;
}

export enum RateMode {
  ON = 'on',
  OFF = 'of'
}

@Directive({
  selector: '[courseExchangeRates]'
})
export class ExchangeRatesDirective implements OnInit {

  @Input('courseExchangeRatesFrom')
  public rates!: IRate[];

  @Input('courseExchangeRatesAutoplay')
  public mode: RateMode = RateMode.OFF;

  @Input('courseExchangeRatesDelay')
  public ms: number = 2000

  private context: any;
  private index: number = 0;

  private intervalId!: number | null;

  public constructor(
    private tmpRef: TemplateRef<any>,
    private vcRef: ViewContainerRef
  ) {
  }

  public ngOnInit(): void {
    this.context = {
      $implicit: this.rates[this.index],
      controls: {
        next: () => this.next(),
        prev: () => this.prev(),
      }
    }
    this.vcRef.createEmbeddedView(this.tmpRef, this.context);
    this.resetInterval();
  }

  private next(): void {
    this.resetInterval();
    this.index++;
    if (this.index >= this.rates.length) {
      this.index = 0;
    }
    this.context.$implicit = this.rates[this.index];
  }

  private prev(): void {
    this.resetInterval();
    this.index--;
    if (this.index < 0) {
      this.index = this.rates.length - 1;
    }
    this.context.$implicit = this.rates[this.index];
  }

  private resetInterval(): void {
    if (this.mode !== RateMode.ON) {
      return;
    }
    this.clearInterval()
      .initInterval();
  }


  private initInterval(): void {
    this.intervalId = setInterval(() => {
      this.next();
    }, this.ms)
  }

  private clearInterval(): this {
    if (this.intervalId) {
      clearInterval(this.intervalId);
    }
    return this;
  }
}
