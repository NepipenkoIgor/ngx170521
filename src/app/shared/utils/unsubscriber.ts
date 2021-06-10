import { Injectable, OnDestroy } from "@angular/core";
import { Subject } from "rxjs";

@Injectable()
export class UnSubscriber implements OnDestroy {
  private unSubscriber = new Subject();


  protected getUnSubscriber() {
    return this.unSubscriber.asObservable();
  }

  public ngOnDestroy() {
    this.unSubscriber.next(true);
    this.unSubscriber.complete();
  }
}
type ConstructableForMixin = new (...args: any[]) => any;
export function UnSubscriberMixin<BC extends ConstructableForMixin>(Base: BC) {
  return class extends Base {
    private unSubscriber = new Subject();

    protected getUnSubscriber() {
      return this.unSubscriber.asObservable();
    }

    public ngOnDestroy(): void {
      this.unSubscriber.next(true);
      this.unSubscriber.complete();
      super.ngOnDestroy();
    }
  };
}

