import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ManagementUserComponent } from './component/management-user/management-user.component';
import { NewUserComponent } from './component/new-user/new-user.component';
import { ProjectRoutes } from './../../../../../../features/enum/routes.enum';
import { UsersComponent } from './users.component';

const routes: Routes = [{
  path: '', component: UsersComponent, children: [
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
  ]
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UsersRoutingModule { }
