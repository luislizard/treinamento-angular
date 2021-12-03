import { LoginGuard } from './../../shared/guard/login.guard';
import { CommentsComponent } from './comments.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    component: CommentsComponent,
    outlet: 'comments-outlet',
    canActivate: [LoginGuard],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CommentsRoutingModule {}
