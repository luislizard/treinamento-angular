import { CommentsRoutingModule } from './comments-routing.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CommentsComponent } from './comments.component';
import { HttpClientModule } from '@angular/common/http';
import { CommentsFormComponent } from './comments-form/comments-form.component';
import { ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    CommentsComponent,
    CommentsFormComponent
  ],
  imports: [
    CommonModule,
    CommentsRoutingModule,
    HttpClientModule,
    ReactiveFormsModule
  ]
})
export class CommentsModule { }
