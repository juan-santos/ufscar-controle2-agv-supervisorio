import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AgvRoutingModule } from './agv-routing.module';
import { AgvComponent } from './agv.component';


@NgModule({
  declarations: [
    AgvComponent
  ],
  imports: [
    CommonModule,
    AgvRoutingModule
  ]
})
export class AgvModule { }
