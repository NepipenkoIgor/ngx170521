import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  Output,
} from '@angular/core';

@Component({
  selector: 'course-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
  changeDetection: ChangeDetectionStrategy.Default
})
export class HeaderComponent {

  @Input()
  public myTitle!: { text: string };

  @Output()
  public toggleSideNav = new EventEmitter();

  public constructor(
    //  public changeDetectorRef: ChangeDetectorRef
  ) {
    // console.log('constructor', this.myTitle);
    // this.changeDetectorRef.detach();
    // setTimeout(()=>{
    //   this.changeDetectorRef.reattach();
    //   //this.changeDetectorRef.detectChanges();
    // }, 7000)
  }

  // public title!: string;

  public toggle() {
    this.toggleSideNav.emit({name: 'Ihor'});
  }

}

// export class HeaderComponent implements OnInit, OnChanges, DoCheck,
//   AfterViewInit, AfterViewChecked, AfterContentInit, AfterContentChecked {
//
//   @Input()
//   public myTitle!: {text: string};
//   // public set myTitle(t: string) {
//   //   if (!t) {
//   //     return;
//   //   }
//   //   console.log(t);
//   //   this.title = t;
//   // }
//
//   @Output()
//   public toggleSideNav = new EventEmitter();
//
//   public constructor(
//   //  public changeDetectorRef: ChangeDetectorRef
//   ) {
//     // console.log('constructor', this.myTitle);
//     // this.changeDetectorRef.detach();
//     // setTimeout(()=>{
//     //   this.changeDetectorRef.reattach();
//     //   //this.changeDetectorRef.detectChanges();
//     // }, 7000)
//   }
//
//   // public title!: string;
//
//   public toggle() {
//     this.toggleSideNav.emit({name: 'Ihor'});
//   }
//
//   public ngOnInit(): void {
//     console.log('ngOnInit', this.myTitle)
//   }
//
//   public ngOnChanges(changes: SimpleChanges): void {
//     console.log('ngOnChanges', changes);
//   }
//
//   public ngDoCheck(): void {
//     console.log('ngDoCheck')
//   }
//
//   public ngAfterContentInit() {
//     console.log('ngAfterContentInit')
//   }
//
//   public ngAfterContentChecked() {
//     console.log('ngAfterContentCheched');
//   }
//
//   public ngAfterViewInit() {
//     console.log('ngAfterViewInit')
//   }
//
//   public ngAfterViewChecked() {
//     console.log('ngAfterViewChecked')
//   }
// }
