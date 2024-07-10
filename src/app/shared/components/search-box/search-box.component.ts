import { Component, EventEmitter, Input, OnDestroy, OnInit, Output } from '@angular/core';
import { debounceTime, Subject, Subscription } from 'rxjs';

@Component({
  selector: 'shared-search-box',
  templateUrl: './search-box.component.html',
  styles: ``,
})
export class SearchBoxComponent implements OnInit, OnDestroy {
  private debouncer: Subject<string> = new Subject<string>();
  private debouncerSubscription?: Subscription;

  @Input()
  public placeholder: string = '';

  @Input()
  public initialValueSB: string = '';

  @Output()
  onValue = new EventEmitter<string>();

  //variable that triggers the function to search a word (term defined onKeyPress) , is hearing the input
  @Output()
  onDebounce = new EventEmitter<string>();

  ngOnInit() {
    this.debouncerSubscription = this.debouncer
      .pipe(debounceTime(500))
      .subscribe((searchTerm) => {
        this.onDebounce.emit(searchTerm);
        // console.log('debouncer value:', value);
      });
  }

  ngOnDestroy(): void {
    this.debouncerSubscription?.unsubscribe();
    // console.log("searchbox un-subscribed")
  }
  // function to send value
  public emitValue(stringValue: string): void {
    // this.placeholder = '';
    this.onValue.emit(stringValue);
  }

  onKeyPress(term: string) {
    this.debouncer.next(term);
  }
}
