import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProjectRoutes } from './../../../../../../features/enum/routes.enum';
import { UsersComponent } from './users.component';
import { InformationUserComponent } from './component/information-user/information-user.component';
import { ManagementUserComponent } from './component/management-user/management-user.component';
import { NewUserComponent } from './component/new-user/new-user.component';

const routes: Routes = [
  {
    path: '',
    component: UsersComponent,
    children: [
      {
        path: '',
        redirectTo: ProjectRoutes.MANAGEMENT,
        pathMatch: 'full',
      },
      {
        path: ProjectRoutes.MANAGEMENT,
        component: ManagementUserComponent
      },
      {
        path: ProjectRoutes.NEW,
        component: NewUserComponent
      },
      {
        path: ProjectRoutes.INFORMATION,
        component: InformationUserComponent
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }
