import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { decrement, increment, reset } from '../states/counter.action';
import { counterState } from '../states/counter.state';
import { AppState } from '../store/app.state';

@Component({
  selector: 'app-counter-button',
  templateUrl: './counter-button.component.html',
  styleUrls: ['./counter-button.component.scss']
})
export class CounterButtonComponent implements OnInit {

  constructor(private _store: Store<AppState>) { }

  ngOnInit(): void {
  }

  public onIncrement() {
    const self = this;
    self._store.dispatch(increment());
  }

  public onDecrement() {
    const self = this;
    self._store.dispatch(decrement());
  }

  public onReset() {
    const self = this;
    self._store.dispatch(reset());
  }

}
