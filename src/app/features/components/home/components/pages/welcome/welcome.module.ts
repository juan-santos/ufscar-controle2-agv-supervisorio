import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { WelcomeRoutingModule } from './welcome-routing.module';
import { WelcomeComponent } from './welcome.component';
import { ManagementUserComponent } from './component/management-user/management-user.component';
import { NewUserComponent } from './component/new-user/new-user.component';


@NgModule({
  declarations: [
    WelcomeComponent,
    ManagementUserComponent,
    NewUserComponent
  ],
  imports: [
    CommonModule,
    WelcomeRoutingModule
  ]
})
export class WelcomeModule { }
