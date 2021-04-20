import { createAction, props } from '@ngrx/store';

export const actionIncrement = createAction('[CREATE ACTION] actionIncrement');
export const actionDecrement = createAction('[CREATE ACTION] actionDecrement');
export const actionReset = createAction('[CREATE ACTION] actionReset');
export const actionFullName = createAction('[CREATE ACTION] actionReset', props<{ value: string }>());