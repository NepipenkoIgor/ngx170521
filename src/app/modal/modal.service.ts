import { Injectable, Type } from '@angular/core';
import { Observable, Subject } from "rxjs";


export interface IModalData {
  component: Type<any>;
  context: any;
}

@Injectable()
export class ModalService {

  private modalSequence: Subject<IModalData | null> = new Subject();

  public open(data: IModalData | null) {
    this.modalSequence.next(data);
  }

  public close() {
    this.modalSequence.next(null);
  }

  public get modalSequence$(): Observable<any> {
    return this.modalSequence.asObservable();
  }
}
