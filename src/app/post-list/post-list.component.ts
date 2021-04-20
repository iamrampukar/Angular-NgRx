import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Post } from '../models/post.model';
import { AppState } from '../store/app.state';
import { addPost, editPost } from './states/post.action';
import { getPostById, getPosts } from './states/post.selector';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.scss']
})
export class PostListComponent implements OnInit {
  post: Observable<Post[]> | undefined;
  public postData: Post | undefined;
  constructor(private _store: Store<AppState>) { }

  ngOnInit(): void {
    this.post = this._store.select(getPosts);
  }

  public onAddPost() {
    const self = this;
    const post: Post = {
      title: 'Title' + Math.random(),
      description: 'Description...'
    }
    self._store.dispatch(addPost({ post }));
  }

  public onEditPost(id: any) {
    const self = this;
    self._store.select(getPostById, { id }).subscribe((res) => {
      self.postData = res;
      const _postData: Post = {
        id: (id + 1),
        title: 'Change Title',
        description: 'Change Description'
      }
      self.postData = _postData;
      self._store.dispatch(editPost({ post: _postData }));
    })

  }

}
