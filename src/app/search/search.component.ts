import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'course-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent {

  @Input()
  public searchTerm!: string;

  @Output()
  public searchTermChange = new EventEmitter();

  public onSearch(e: Event): void {
    const value = (e.target as HTMLInputElement).value;
    this.searchTermChange.emit(value);
  }

}
