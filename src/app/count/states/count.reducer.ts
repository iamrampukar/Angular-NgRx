import { createReducer, on } from '@ngrx/store';
import { actionFullName, actionIncrement } from './count.action';
import { initialState } from './count.state';

const _countReduce = createReducer(initialState,
    on(actionIncrement, (state) => {
        return {
            ...state,
            counting: state.counting + 1
        }
    }),
    on(actionFullName, (state, action) => {
        return {
            ...state,
            fullName: action.value
        };
    })
);

export function countReducer(state: any, action: any) {
    return _countReduce(state, action);
}