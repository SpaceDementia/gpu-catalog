// search-bar.component.ts
import { Component, Output, EventEmitter, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.sass'],
  encapsulation: ViewEncapsulation.None
})
export class SearchBarComponent {
  @Output() search = new EventEmitter<string>();

  searchTerm = '';

  onSearch() {
    this.search.emit(this.searchTerm);
  }
}

