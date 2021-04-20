import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CountRoutingModule } from './count-routing.module';
import { CounterComponent } from './counter/counter.component';
import { StoreModule } from '@ngrx/store';
import { countReducer } from './states/count.reducer';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    CounterComponent
  ],
  imports: [
    CommonModule,
    CountRoutingModule,
    FormsModule,
    // StoreModule.forRoot({ count: countReducer })
  ]
})
export class CountModule { }
