import { Injectable } from '@angular/core';
import { Post } from '../interface/post.interface';

@Injectable({
  providedIn: 'root'
})
export class PostsService {

  posts: Post[] = [{
    id: '1',
    title: 'Nosso primeiro Post',
    category: 'Tech',
    likes: 123,
    tags: ['tag1', 'tag3'],
    created: "nov 2021"
  }, {
    id: '2',
    title: 'Nosso segundo Post',
    category: 'Miscellaneous',
    likes: 312,
    created: "out 2021"
  },
  {
    id: '3',
    title: 'Nosso Terceiro Post',
    category: 'Miscellaneous',
    likes: 312,
    tags: ['tag1', 'tag3'],
    created: "nov 2021"
  }]

  constructor() { }

  getPosts(): Post[] {
    return this.posts;
  }

  getPostById(postId: string | null): Post | undefined{
    return this.posts.find(post => post.id === postId);
  }
}
