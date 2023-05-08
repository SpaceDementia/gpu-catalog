// navigation.service.ts
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class NavigationService {
  private _isReturningFromDetails = false;

  // Shared service to store the returning flag without it appearing in the URL
  // We do this in order not to load the Graphics Cards again when we go back from a Graphics Card details page to the Graphics Cards List
  // We have a subscription to the queryParams on the ngOnInit so, everytime they are modified, the Graphics Cards List is reloaded
  // With this isReturningFromDetails flag we can control when do we have to reload the Graphics Cards List

  get isReturningFromDetails(): boolean {
    return this._isReturningFromDetails;
  }

  setReturningFromDetails(value: boolean): void {
    this._isReturningFromDetails = value;
  }
}

