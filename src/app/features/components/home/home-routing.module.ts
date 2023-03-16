import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProjectRoutes } from '../../enum/routes.enum';
import { HomeComponent } from './home.component';

const routes: Routes = [
    {
        path: '',
        component: HomeComponent,
        children: [
            { path: '', redirectTo: ProjectRoutes.WELCOME, pathMatch: 'full' },
            {
                path: ProjectRoutes.AGV,
                loadChildren: () =>
                    import('./components/pages/agv/agv.module').then((m) => m.AgvModule),
            },
            {
                path: ProjectRoutes.WELCOME,
                loadChildren: () =>
                    import('./components/pages/welcome/welcome.module').then(
                        (m) => m.WelcomeModule
                    ),
            },
            {
                path: ProjectRoutes.USERS,
                loadChildren: () =>
                    import('./components/pages/users/users.module').then((m) => m.UsersModule),
            },
        ],
    },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class HomeRoutingModule {}
