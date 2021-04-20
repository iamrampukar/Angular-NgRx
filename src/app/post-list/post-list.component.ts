import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Post } from '../models/post.model';
import { AppState } from '../store/app.state';
import { addPost } from './states/post.action';
import { getPosts } from './states/post.selector';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.scss']
})
export class PostListComponent implements OnInit {
  post: Observable<Post[]> | undefined;
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

}
