import { CommentsDataService } from './services/comments-data.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.css']
})
export class CommentsComponent implements OnInit {

  comments: any;

  constructor(private commentsService: CommentsDataService) { }

  ngOnInit(): void {
    this.commentsService.getComments().subscribe((res)=> this.comments = res)
  }

}
