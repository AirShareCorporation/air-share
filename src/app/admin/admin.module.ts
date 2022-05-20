import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminRoutingModule } from './admin-routing.module';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { AdminComponent } from './admin/admin.component';
import { ManageUsersComponent } from './manage-users/manage-users.component';
import { ManagePostsComponent } from './manage-posts/manage-posts.component';


@NgModule({
  declarations: [
    AdminDashboardComponent,
    AdminComponent,
    ManageUsersComponent,
    ManagePostsComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule
  ]
})
export class AdminModule { }
