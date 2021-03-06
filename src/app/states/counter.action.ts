import { createAction, props } from '@ngrx/store';

export const increment = createAction('[COUNTER] Increment');
export const decrement = createAction('[COUNTER] Decrement');
export const reset = createAction('[COUNTER] Reset');
export const inputValue = createAction('[COUNTER] Input Value', props<{ value: number }>());

export const changeChannelName = createAction('changeChannelName');