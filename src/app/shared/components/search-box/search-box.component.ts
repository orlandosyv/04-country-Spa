import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'shared-search-box',
  templateUrl: './search-box.component.html',
  styles: ``,
})
export class SearchBoxComponent {
  @Input()
  public placeholder: string = '';

  @Output()
  onValue = new EventEmitter<string>();

  // function to send value
  public emitValue(value: string): void {

    // this.placeholder = '';

    this.onValue.emit(value);

  }
}
