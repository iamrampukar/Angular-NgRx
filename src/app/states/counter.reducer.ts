import { createReducer, on } from '@ngrx/store';
import { changeChannelName, decrement, increment, inputValue, reset } from './counter.action';
import { initialState } from './counter.state';

const _counterFx = createReducer(initialState,
    on(increment, (state) => {
        return {
            ...state,
            counter: state.counter + 1
        }
    }),
    on(decrement, (state) => {
        return {
            ...state,
            counter: state.counter - 1
        }
    }),
    on(reset, (state) => {
        return {
            ...state,
            counter: 0
        }
    }),
    on(inputValue, (state: any, action: any) => {
        return {
            ...state,
            counter: action.value
        }
    }),
    on(changeChannelName, (state: any) => {
        return {
            ...state,
            changelName: 'Modify Ram Pukar'
        }
    })
);

export function counterReducer(state: any, action: any) {
    return _counterFx(state, action);
}