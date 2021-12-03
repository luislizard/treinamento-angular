import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Post } from '../interface/post.interface';

@Injectable({
  providedIn: 'root'
})
export class PostsService {

  // posts: Post[] = [{
  //   id: '1',
  //   title: 'Nosso primeiro Post',
  //   category: 'Tech',
  //   likes: 123,
  //   tags: ['tag1', 'tag3'],
  //   created: "nov 2021"
  // }, {
  //   id: '2',
  //   title: 'Nosso segundo Post',
  //   category: 'Miscellaneous',
  //   likes: 312,
  //   created: "out 2021"
  // },
  // {
  //   id: '3',
  //   title: 'Nosso Terceiro Post',
  //   category: 'Miscellaneous',
  //   likes: 312,
  //   tags: ['tag1', 'tag3'],
  //   created: "nov 2021"
  // }]

  constructor(private http: HttpClient) { }

  getPosts() {
    // return this.posts;
    return this.http.get<Post[]>(`${environment.backendApi}/user/1/post`);
  }

  getPostById(postId: string | null){
    // return this.posts.find(post => post.id === postId);
    return this.http.get<Post>(`${environment.backendApi}/user/1/post/${postId}`);
  }

  searchPost(input: string){ ///blogs?search=blog1
    return this.http.get<Post[]>(`${environment.backendApi}/user/1/post?search=${input}`);
  }
}
