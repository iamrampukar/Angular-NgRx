import { createReducer, on } from "@ngrx/store";
import { addPost, editPost } from "./post.action";
import { initialState } from "./post.state";


const _postReducer = createReducer(initialState,
    on(addPost, (state, action) => {
        let post = { ...action.post };
        post.id = (state.post.length + 1).toString();
        return {
            ...state,
            post: [...state.post, post]
        };
    }),
    on(editPost, (state, action) => {
        const edit = state.post.map((pst) => {
            return action.post.id == pst.id ? action.post : pst;
        });
        return {
            ...state,
            post: edit
        }
    })
);

export function postReducer(state: any, action: any) {
    return _postReducer(state, action);
}