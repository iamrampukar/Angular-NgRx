import { countReducer } from "../count/states/count.reducer";
import { postReducer } from "../post-list/states/post.reducer";
import { PostState } from "../post-list/states/post.state";
import { counterReducer } from "../states/counter.reducer";
import { counterState } from "../states/counter.state";

export interface AppState {
    counter: counterState,
    counting: counterState,
    post: PostState
}

export const appReducer = {
    counterX: counterReducer,
    counting: countReducer,
    post: postReducer,

}