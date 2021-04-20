import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StoreModule } from '@ngrx/store';
import { NgxBootstrapModule } from './ngx-bootstrap/ngx-bootstrap.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CounterOutputComponent } from './counter-output/counter-output.component';
import { CounterButtonComponent } from './counter-button/counter-button.component';
import { counterReducer } from './states/counter.reducer';
import { CounterInputComponent } from './counter-input/counter-input.component';
import { countReducer } from './count/states/count.reducer';

@NgModule({
  declarations: [
    AppComponent,
    CounterOutputComponent,
    CounterButtonComponent,
    CounterInputComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    NgxBootstrapModule,
    StoreModule.forRoot({ counterX: counterReducer, counting: countReducer })
    // StoreModule.forRoot({ count: countReducer })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
