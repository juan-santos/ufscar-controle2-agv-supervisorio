import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserRoutingModule } from './users-routing.module';
import { UsersComponent } from './users.component';
import { ManagementUserComponent } from './component/management-user/management-user.component';
import { NewUserComponent } from './component/new-user/new-user.component';
import { InformationUserComponent } from './component/information-user/information-user.component';


@NgModule({
  declarations: [
    UsersComponent,
    ManagementUserComponent,
    NewUserComponent,
    InformationUserComponent
  ],
  imports: [
    CommonModule,
    UserRoutingModule
  ]
})
export class UsersModule { }
