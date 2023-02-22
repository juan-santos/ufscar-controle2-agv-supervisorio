import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProjectRoutes } from './features/enum/routes.enum';

const routes: Routes = [
    {
        path: '',
        redirectTo: ProjectRoutes.LOGIN,
        pathMatch: 'full',
    },
    {
        path: ProjectRoutes.LOGIN,
        loadChildren: () => import('./features/components/login/login.module').then((m) => m.LoginModule),
    },
    {
        path: ProjectRoutes.HOME,
        loadChildren: () => import('./features/components/home/home.module').then((m) => m.HomeModule),
    },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
})
export class AppRoutingModule {}
