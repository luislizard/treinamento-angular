import { CommentsDataService } from './services/comments-data.service';
import { Component, OnInit } from '@angular/core';
import { Comments } from './interfaces/comments.interface';

@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.css']
})
export class CommentsComponent implements OnInit {

  comments: Comments[] | null = null;

  constructor(private commentsService: CommentsDataService) { }

  ngOnInit(): void {
    this.commentsService.getComments().subscribe((res: Comments[]) => this.comments = res)
  }

}
