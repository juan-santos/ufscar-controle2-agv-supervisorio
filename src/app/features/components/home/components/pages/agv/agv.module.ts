import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AgvRoutingModule } from './agv-routing.module';
import { AgvComponent } from './agv.component';
import { ManagementAgvComponent } from './components/management-agv/management-agv.component';
import { NewAgvComponent } from './components/new-agv/new-agv.component';


@NgModule({
  declarations: [
    AgvComponent,
    ManagementAgvComponent,
    NewAgvComponent
  ],
  imports: [
    CommonModule,
    AgvRoutingModule
  ]
})
export class AgvModule { }
