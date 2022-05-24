import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminRoutingModule } from './admin-routing.module';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { AdminComponent } from './admin/admin.component';
import { ManageUsersComponent } from './manage-users/manage-users.component';
import { ManagePostsComponent } from './manage-posts/manage-posts.component';
import { UserDetailComponent } from './user-detail/user-detail.component';
import {FormsModule} from "@angular/forms";
import { TopicDetailComponent } from './topic-detail/topic-detail.component';
import { ResponseDetailComponent } from './response-detail/response-detail.component';


@NgModule({
  declarations: [
    AdminDashboardComponent,
    AdminComponent,
    ManageUsersComponent,
    ManagePostsComponent,
    UserDetailComponent,
    TopicDetailComponent,
    ResponseDetailComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    FormsModule
  ]
})
export class AdminModule { }
