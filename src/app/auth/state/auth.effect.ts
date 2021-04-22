import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from '@ngrx/effects'
import { loginStart } from "./auth.action";
@Injectable()
export class AuthEffects {
    constructor(private action$: Actions) { }
    login$ = createEffect(() => {
        return this.action$.pipe(ofType(loginStart));
    });
}
