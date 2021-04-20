import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { actionFullName, actionIncrement } from '../states/count.action';
import { countingState } from '../states/count.state';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.scss']
})
export class CounterComponent implements OnInit {
  public counting: number | undefined;
  public sendValue: any | undefined;
  public getSendValue: any | undefined;

  constructor(private _store: Store<{ counting: countingState }>) { }

  ngOnInit(): void {
    const self = this;
    self._store.select('counting').subscribe((res) => {
      self.counting = res.counting;
      self.getSendValue = res.fullName;
    })
  }

  public onIncrement() {
    const self = this;
    self._store.dispatch(actionIncrement());
  }

  public onSendValue() {
    const self = this;
    self._store.dispatch(actionFullName({ value: self.sendValue }));
  }

}
