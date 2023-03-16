import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AgvRoutingModule } from './agv-routing.module';
import { AgvComponent } from './agv.component';
import { ManagementAgvComponent } from './components/management-agv/management-agv.component';
import { NewAgvComponent } from './components/new-agv/new-agv.component';
import { InformationAgvComponent } from './components/information-agv/information-agv.component';
import { SocketService } from './../../../../../../features/services/socket/socket.service';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AgvComponent,
    ManagementAgvComponent,
    NewAgvComponent,
    InformationAgvComponent
  ],
  imports: [
    CommonModule,
    AgvRoutingModule,
    ReactiveFormsModule
  ],
  providers: [
    SocketService
  ]
})
export class AgvModule { }
