import { Component, ContentChild, OnInit, TemplateRef, ViewChild, ViewContainerRef } from '@angular/core';
import { MatDrawer } from "@angular/material/sidenav";

@Component({
  selector: 'course-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.css']
})
export class SidenavComponent implements OnInit {
  @ViewChild('drawer', {static: true})
  public myEl!: MatDrawer

  @ViewChild('drawer', {static: true, read: ViewContainerRef})
  public content!: ViewContainerRef

  @ContentChild('contentTml', {static: true})
  public contentTml!: TemplateRef<any>

  public ngOnInit() {
    console.log(this.myEl);
    console.log(this.content);
    this.content.createEmbeddedView(this.contentTml)
  }

}
