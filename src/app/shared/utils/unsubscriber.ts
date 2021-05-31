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
