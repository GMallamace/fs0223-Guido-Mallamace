// FASE 5 POST INATTIVI


import { Component } from '@angular/core';
import { PostsService } from '../posts.service';
import { Post } from '../post.interface';

@Component({
  selector: 'app-inactive-posts',
  template: `
    <h1>Post Inattivi</h1>
    <ul>
      <li *ngFor="let post of inactivePosts">{{ post.title }}</li>
    </ul>
  `
})
export class InactivePostsComponent {
  inactivePosts: Post[];

  constructor(private postsService: PostsService) {
    this.inactivePosts = this.postsService.fetchPosts().filter(post => !post.active);
  }
}
