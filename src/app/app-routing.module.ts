import { AdminComponent } from './admin/admin.component';
import { LayoutComponent } from './core/layout/layout.component';
import { CommentsComponent } from './post-view/comments/comments.component';
import { PostViewComponent } from './post-view/post-view.component';
import { PortifolioComponent } from './portifolio/portifolio.component';
import { ContactComponent } from './contact/contact.component';
import { AboutComponent } from './about/about.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { PostListComponent } from './post-list/post-list.component';

const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      { path: '', redirectTo: '/posts', pathMatch: 'full' },
      { path: 'not-found', component: NotFoundComponent },
      { path: 'posts', component: PostListComponent },
      { path: 'busca/:keyword', component: PostListComponent },
      {
        path: 'post/:id',
        component: PostViewComponent,
        children: [
          {
            path: 'comentarios',
            loadChildren: () =>
              import('./post-view/comments/comments.module').then(
                (m) => m.CommentsModule
              ),
          },
        ],
      },
      { path: 'sobre-mim', component: AboutComponent },
      { path: 'contato', component: ContactComponent },
      { path: 'portifolio', component: PortifolioComponent },
    ],
  },
  { path: 'admin', loadChildren: () => import('./admin/admin.module').then((m) => m.AdminModule ) },

  //
  // { path: '**', redirectTo: '/not-found', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
