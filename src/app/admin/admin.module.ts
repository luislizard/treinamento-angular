import { ErrorInterceptor } from './interceptors/error.interceptor';
import { loginInterceptor } from './interceptors/login.interceptor';
import { AdminGuard } from './guards/admin.guard';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { AdminComponent } from './admin.component';
import { RouterModule, Routes } from '@angular/router';
import { LayoutAdminComponent } from './layout-admin/layout-admin.component';
import { CreateComponent } from './posts/create/create.component';
import { UpdateComponent } from './posts/update/update.component';
import { ListComponent } from './posts/list/list.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HTTP_INTERCEPTORS } from '@angular/common/http';

const routes: Routes = [
  {
    path: '',
    component: LayoutAdminComponent,
    children: [
      { path: '', component: ListComponent, canActivate: [AdminGuard] },
      {
        path: 'editar/:id',
        component: UpdateComponent,
        canActivate: [AdminGuard],
      },
      {
        path: 'publicar',
        component: CreateComponent,
        canActivate: [AdminGuard],
      },
    ],
  },
  { path: 'login', component: LoginComponent },
];

@NgModule({
  declarations: [
    LoginComponent,
    AdminComponent,
    LayoutAdminComponent,
    CreateComponent,
    UpdateComponent,
    ListComponent,
  ],
  imports: [CommonModule, RouterModule.forChild(routes), ReactiveFormsModule],
  exports: [RouterModule],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: loginInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true },
  ],
})
export class AdminModule {}
