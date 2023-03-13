import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UsersRoutingModule } from './users-routing.module';
import { UsersComponent } from './users.component';
import { NewUserComponent } from './component/new-user/new-user.component';
import { ManagementUserComponent } from './component/management-user/management-user.component';


@NgModule({
  declarations: [
    UsersComponent,
    NewUserComponent,
    ManagementUserComponent
  ],
  imports: [
    CommonModule,
    UsersRoutingModule
  ]
})
export class UsersModule { }
