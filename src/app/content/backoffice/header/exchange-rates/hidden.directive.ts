import { Directive, HostBinding } from '@angular/core';

enum VisibilityEnum {
  VISIBLE = 'visible',
  HIDDEN = 'hidden'
}

@Directive({
  selector: '[courseHidden]',
  exportAs: 'hiddenControl'
})
export class HiddenDirective {

  @HostBinding('style.visibility')
  public visibility: VisibilityEnum = VisibilityEnum.HIDDEN;

  public show(): void {
    this.visibility = VisibilityEnum.VISIBLE;
  }

  public hide(): void {
    this.visibility = VisibilityEnum.HIDDEN;
  }

}
