import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {AdminComponent} from "./admin/admin.component";
import {ManageUsersComponent} from "./manage-users/manage-users.component";
import {ManagePostsComponent} from "./manage-posts/manage-posts.component";
import {AuthGuard} from "../auth/auth.guard";
import {AdminDashboardComponent} from "./admin-dashboard/admin-dashboard.component";
import {UserDetailComponent} from "./user-detail/user-detail.component";

const adminRoutes: Routes = [
  {
    path: 'admin',
    component: AdminComponent,
    canActivate: [AuthGuard],
    children: [
      {
        path: '',
        children: [
          {path: 'dashboard', component: AdminDashboardComponent},
          {path: 'posts', component: ManagePostsComponent},
          {path: 'users', component: ManageUsersComponent},
          {path: 'users/detail/:id', component: UserDetailComponent},
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
