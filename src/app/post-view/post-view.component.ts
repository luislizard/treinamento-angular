import { PostsService } from './../shared/services/posts.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Post } from '../shared/interface/post.interface';

@Component({
  selector: 'app-post-view',
  templateUrl: './post-view.component.html',
  styleUrls: ['./post-view.component.css']
})
export class PostViewComponent implements OnInit {
  postId: string | null;
  post: Post | undefined;

  constructor(route: ActivatedRoute, postService: PostsService) {
    this.postId = route.snapshot.paramMap.get('id');

    this.post = postService.getPostById(this.postId)
  }

  ngOnInit(): void {
  }

}
