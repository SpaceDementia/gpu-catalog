// search-bar.component.ts
import { Component, Input, Output, EventEmitter, ViewEncapsulation } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.sass'],
  encapsulation: ViewEncapsulation.None
})
export class SearchBarComponent {

  @Input() searchTerm$!: Observable<string | null>;
  @Output() search = new EventEmitter<string>();

}

