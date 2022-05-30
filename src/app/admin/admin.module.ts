import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminRoutingModule } from './admin-routing.module';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { AdminComponent } from './admin/admin.component';
import { ManageUsersComponent } from './users/manage-users/manage-users.component';
import { ManagePostsComponent } from './posts/manage-posts/manage-posts.component';
import { UserDetailComponent } from './users/user-detail/user-detail.component';
import {FormsModule} from "@angular/forms";
import { TopicDetailComponent } from './posts/topic-detail/topic-detail.component';
import { ResponseDetailComponent } from './posts/response-detail/response-detail.component';
import { ManageCategoriesComponent } from './categories/manage-categories/manage-categories.component';
import { CategoryDetailComponent } from './categories/category-detail/category-detail.component';
import { ManageRolesComponent } from './roles/manage-roles/manage-roles.component';
import { ManageStatusComponent } from './status/manage-status/manage-status.component';
import { ManageUnitsComponent } from './units/manage-units/manage-units.component';
import { RoleDetailComponent } from './roles/role-detail/role-detail.component';
import { StatusDetailComponent } from './status/status-detail/status-detail.component';
import { UnitDetailComponent } from './units/unit-detail/unit-detail.component';
import { UserCreateComponent } from './users/user-create/user-create.component';


@NgModule({
  declarations: [
    AdminDashboardComponent,
    AdminComponent,
    ManageUsersComponent,
    ManagePostsComponent,
    UserDetailComponent,
    TopicDetailComponent,
    ResponseDetailComponent,
    ManageCategoriesComponent,
    CategoryDetailComponent,
    ManageRolesComponent,
    ManageStatusComponent,
    ManageUnitsComponent,
    RoleDetailComponent,
    StatusDetailComponent,
    UnitDetailComponent,
    UserCreateComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    FormsModule
  ]
})
export class AdminModule { }
