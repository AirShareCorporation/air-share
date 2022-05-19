import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {AdminComponent} from "./admin/admin.component";
import {ManageUsersComponent} from "./manage-users/manage-users.component";
import {ManagePostsComponent} from "./manage-posts/manage-posts.component";
import {AuthGuard} from "../auth/auth.guard";

const adminRoutes: Routes = [
  {
    path: 'admin',
    component: AdminComponent,
    canActivate: [AuthGuard],
    children: [
      {
        path: '',
        children: [
          {path: 'users', component: ManageUsersComponent},
          {path: 'posts', component: ManagePostsComponent},
          {path: '', component: AdminComponent},
        ]
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(adminRoutes)],
  exports: [RouterModule]
})
export class AdminRoutingModule {
}
