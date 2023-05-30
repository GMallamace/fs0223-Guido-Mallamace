//FASE 5  definire il componente ActivePostsComponent:

import { Component } from '@angular/core';
import { PostsService } from '../posts.service';
import { Post } from '../../post.interface';

@Component({
  selector: 'app-active-posts',
  template: `
    <h1>Post Attivi</h1>
    <ul>
      <li *ngFor="let post of activePosts">{{ post.title }}</li>
    </ul>
  `
})
export class ActivePostsComponent {
  activePosts: Post[];

  constructor(private postsService: PostsService) {
    this.activePosts = this.postsService.fetchPosts().filter(post => post.active);
  }
}
