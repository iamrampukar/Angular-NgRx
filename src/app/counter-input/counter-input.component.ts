import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { changeChannelName, inputValue } from '../states/counter.action';
import { getChannelName } from '../states/counter.selector';
import { counterState } from '../states/counter.state';

@Component({
  selector: 'app-counter-input',
  templateUrl: './counter-input.component.html',
  styleUrls: ['./counter-input.component.scss']
})
export class CounterInputComponent implements OnInit {
  public addValue: any = ''
  public channelName: any;

  constructor(private _store: Store<{ counterX: counterState }>) { }

  ngOnInit(): void {
    const self = this;
    self._store.select(getChannelName).subscribe((res) => {
      self.channelName = res;
      console.log('Channel Name log');
    });
  }

  public onAddValue() {
    const self = this;
    self._store.dispatch(inputValue({ value: parseInt(self.addValue) }));
  }

  public onChangeChannelName() {
    const self = this;
    self._store.dispatch(changeChannelName());
  }

}
