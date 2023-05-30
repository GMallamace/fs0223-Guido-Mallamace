// 1. FASE2 All'interno di questo file, 
//codice per definire il servizio PostsService (1) e
// il metodo fetch per recuperare la lista dei post:


import { Injectable } from '@angular/core';
import { Post } from '../post.interface';

@Injectable({
  providedIn: 'root'
})
export class PostsService {
  private posts: Post[] = [
    { title: 'Post 1', content: 'Contenuto del Post 1', active: true },
    { title: 'Post 2', content: 'Contenuto del Post 2', active: false },
    { title: 'Post 3', content: 'Contenuto del Post 3', active: true },
    { title: 'Post 4', content: 'Contenuto del Post 4', active: false },
  ];

  fetchPosts(): Post[] {
    return this.posts;
  }
}
