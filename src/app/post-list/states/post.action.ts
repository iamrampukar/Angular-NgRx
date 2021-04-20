import { createAction, props } from "@ngrx/store";
import { Post } from "src/app/models/post.model";

export const ADD_POST_ACTION = '[POST COMPONENT] add post';
export const EDIT_POST_ACTION = '[POST COMPONENT] edit post';

export const addPost = createAction(ADD_POST_ACTION, props<{ post: Post }>());
export const editPost = createAction(EDIT_POST_ACTION, props<{ post: Post }>());