import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-comments-form',
  templateUrl: './comments-form.component.html',
  styleUrls: ['./comments-form.component.css']
})
export class CommentsFormComponent implements OnInit {

  commentForm: FormGroup;

  constructor() {
    this.commentForm = new FormGroup({
      commentTxt: new FormControl('', [Validators.required, Validators.minLength(10)])
    })
   }

  ngOnInit(): void {
    console.log(this.commentForm.controls['commentTxt'].errors)
  }

  sendForm(){
    console.log(this.commentForm)
  }

}
