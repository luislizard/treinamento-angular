import { PostsService } from './../shared/services/posts.service';
import { Component, OnInit } from '@angular/core';
import { Post } from '../shared/interface/post.interface';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.css']
})
export class PostListComponent implements OnInit {
  posts: Post[];
  showPosts: boolean;


  constructor(postService: PostsService ) {
    this.showPosts = true;
    this.posts = postService.getPosts();
  }

  ngOnInit(): void {
  }

}
