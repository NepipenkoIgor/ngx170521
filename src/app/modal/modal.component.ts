import {
  Component,
  ComponentFactory,
  ComponentFactoryResolver, ComponentRef, HostListener,
  OnInit,
  ViewChild,
  ViewContainerRef
} from '@angular/core';
import { IModalData, ModalService } from "./modal.service";
import { UnSubscriberMixin } from "../shared/utils/unsubscriber";
import { takeUntil } from "rxjs/operators";

class BaseComponent {
  public timestamp = new Date();
}


@Component({
  selector: 'course-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent extends UnSubscriberMixin(BaseComponent) implements OnInit {

  @ViewChild('modalContent', {read: ViewContainerRef})
  public modalContent!: ViewContainerRef;

  public isOpen: boolean = false;
  private componentFactory!: ComponentFactory<any>;
  private componentRef!: ComponentRef<any>;

  public constructor(
    private modalService: ModalService,
    private cfr: ComponentFactoryResolver,
  ) {
    super();
  }

  public ngOnInit(): void {

    this.modalService.modalSequence$
      .pipe(takeUntil(this.getUnSubscriber()))
      .subscribe((data: IModalData) => {
        if (!data) {
          this.close();
          return;
        }
        this.isOpen = true;
        this.componentFactory = this.cfr.resolveComponentFactory(data.component);
        this.componentRef = this.modalContent.createComponent(this.componentFactory, 0);
        Object.entries(data.context).forEach(([key, value]) => {
          this.componentRef.instance[key] = value;
        })
      })
  }

  @HostListener('window:keyup', ['$event.keyCode'])
  private close(code: number = 27) {
    if (code !== 27) {
      return;
    }
    if (this.componentRef) {
      this.componentRef.destroy();
    }
    this.isOpen = false;
  }

}
