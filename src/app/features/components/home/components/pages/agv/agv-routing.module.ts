import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AgvComponent } from './agv.component';

const routes: Routes = [{ path: '', component: AgvComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AgvRoutingModule { }
