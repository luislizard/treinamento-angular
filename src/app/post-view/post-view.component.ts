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

  contentHtml = '<p>texto  em <b>negrito</b></p>'

  constructor(route: ActivatedRoute, postService: PostsService) {
    this.postId = route.snapshot.paramMap.get('id');
    postService.getPostById(this.postId).subscribe((res) => this.post = res)

   // this.post = postService.getPostById(this.postId)
  }

  ngOnInit(): void {
  }

}
