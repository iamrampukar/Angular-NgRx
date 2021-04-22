import { createAction, props } from "@ngrx/store";

export const LOGIN_START = '[AUTH PAGE] login start';
export const LOGIN_SUCCESS = '[AUTH PAGE] login success';
export const LOGIN_FAIL = '[AUTH PAGE] login fail';

export const loginStart = createAction(LOGIN_START, props<{ email: any; password: any }>());

export const loginSuccess = createAction(LOGIN_SUCCESS);