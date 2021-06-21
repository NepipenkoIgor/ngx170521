import { Component, HostListener } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from "@angular/forms";

type Cb = (checked: boolean) => void;

@Component({
  selector: 'course-switcher',
  templateUrl: './switcher.component.html',
  styleUrls: ['./switcher.component.css'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: SwitcherComponent,
      multi: true
    }
  ]
})
export class SwitcherComponent implements ControlValueAccessor {
  public checked: boolean = false;
  public change!: Cb;

  @HostListener('click')
  public toggle(): void {
    this.checked = !this.checked;
    this.change(this.checked);
  }

  public writeValue(checked: boolean): void {
    this.checked = checked;
  }

  public registerOnChange(fn: any): void {
    this.change = fn;
  }

  public registerOnTouched(_fn: any): void {

  }

}
