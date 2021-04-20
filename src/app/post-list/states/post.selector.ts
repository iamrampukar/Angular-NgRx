import { createFeatureSelector, createSelector } from '@ngrx/store';
import { PostState } from './post.state';

const getPostState = createFeatureSelector<PostState>('post');

export const getPosts = createSelector(getPostState, (state) => {
    return state.post;
});

export const getPostById = createSelector(getPostState, (state: any, props: any) => {
    // return state.post[props.id] ? state.post[props.id] : null;
    return state.post.find((post: { id: any; }) => post.id === props.id);
});