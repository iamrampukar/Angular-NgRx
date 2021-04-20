import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { getCounter } from '../states/counter.selector';
import { counterState } from '../states/counter.state';

@Component({
  selector: 'app-counter-output',
  templateUrl: './counter-output.component.html',
  styleUrls: ['./counter-output.component.scss']
})
export class CounterOutputComponent implements OnInit {

  public counter: number | undefined;
  counterNumber$: Observable<{ counter: number }>;


  constructor(private _store: Store<{ counterX: counterState }>) {
    const self = this;
    this.counterNumber$ = self._store.select("counterX");
  }

  ngOnInit(): void {
    const self = this;
    self._store.select(getCounter).subscribe(res => {
      self.counter = res;
      console.log('Counter log');
    })

  }
}
