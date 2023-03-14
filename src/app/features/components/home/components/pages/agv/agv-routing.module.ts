import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProjectRoutes } from './../../../../../../features/enum/routes.enum';
import { AgvComponent } from './agv.component';
import { InformationAgvComponent } from './components/information-agv/information-agv.component';
import { ManagementAgvComponent } from './components/management-agv/management-agv.component';
import { NewAgvComponent } from './components/new-agv/new-agv.component';

const routes: Routes = [
  {
    path: '',
    component: AgvComponent,
    children: [
      {
        path: '',
        redirectTo: ProjectRoutes.MANAGEMENT,
        pathMatch: 'full',
      },
      {
        path: ProjectRoutes.MANAGEMENT,
        component: ManagementAgvComponent
      },
      {
        path: ProjectRoutes.NEW,
        component: NewAgvComponent
      },
      {
        path: ProjectRoutes.INFORMATION,
        component: InformationAgvComponent
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AgvRoutingModule { }
