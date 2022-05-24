import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {AdminComponent} from "./admin/admin.component";
import {ManageUsersComponent} from "./users/manage-users/manage-users.component";
import {ManagePostsComponent} from "./posts/manage-posts/manage-posts.component";
import {AuthGuard} from "../auth/auth.guard";
import {AdminDashboardComponent} from "./admin-dashboard/admin-dashboard.component";
import {UserDetailComponent} from "./users/user-detail/user-detail.component";
import {TopicDetailComponent} from "./posts/topic-detail/topic-detail.component";
import {ResponseDetailComponent} from "./posts/response-detail/response-detail.component";
import {ManageCategoriesComponent} from "./categories/manage-categories/manage-categories.component";
import {CategoryDetailComponent} from "./categories/category-detail/category-detail.component";
import {ManageRolesComponent} from "./roles/manage-roles/manage-roles.component";
import {RoleDetailComponent} from "./roles/role-detail/role-detail.component";
import {ManageStatusComponent} from "./status/manage-status/manage-status.component";
import {StatusDetailComponent} from "./status/status-detail/status-detail.component";
import {ManageUnitsComponent} from "./units/manage-units/manage-units.component";
import {UnitDetailComponent} from "./units/unit-detail/unit-detail.component";

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
          {path: 'posts/topics/detail/:id', component: TopicDetailComponent},
          {path: 'posts/responses/detail/:id', component: ResponseDetailComponent},
          {path: 'users', component: ManageUsersComponent},
          {path: 'users/detail/:id', component: UserDetailComponent},
          {path: 'categories', component: ManageCategoriesComponent},
          {path: 'categories/detail/:id', component: CategoryDetailComponent},
          {path: 'roles', component: ManageRolesComponent},
          {path: 'roles/detail/:id', component: RoleDetailComponent},
          {path: 'status', component: ManageStatusComponent},
          {path: 'status/detail/:id', component: StatusDetailComponent},
          {path: 'units', component: ManageUnitsComponent},
          {path: 'units/detail/:id', component: UnitDetailComponent},
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
