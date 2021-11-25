import { Component, OnInit } from '@angular/core';
import { Post } from '../shared/interface/post.interface';



@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.css']
})
export class PostListComponent implements OnInit {

  showPosts: boolean;
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

  constructor() { 
    this.showPosts = true;
  }

  ngOnInit(): void {
  }

}
