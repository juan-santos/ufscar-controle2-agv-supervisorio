import { Component } from '@angular/core';
import { ActivatedRoute, NavigationExtras, Router } from '@angular/router';
import { take } from 'rxjs';
import { ProjectRoutes } from './../../../../../../../../features/enum/routes.enum';
import { User } from './../../../../../../../../features/interfaces/user.interface';
import { UserService } from './../../../../../../../../features/services/user/user-service.service';

@Component({
    selector: 'app-management-user',
    templateUrl: './management-user.component.html',
    styleUrls: ['./management-user.component.scss'],
})
export class ManagementUserComponent {
    /**
     *
     * @param router Router
     * @param activatedRoute ActivatedRoute
     * @param userService AgvService
     */
    constructor(
        private router: Router,
        private activatedRoute: ActivatedRoute,
        private userService: UserService
    ) {}

    public showAlert = false;
    public showMessage = '';
    public listUser: Array<User> = [];

    public ngOnInit() {
        this.userService
            .getListUser()
            .pipe(take(1))
            .subscribe((data) => {
                this.listUser = data;
            });

        this.activatedRoute.queryParams.pipe(take(1)).subscribe((data) => {
            const message = data;
            if (data) {
                this.showMessage = message['text'];
            }
        });
    }

    /**
     * Método responsável por remover da lista
     * @param id id do elemento a ser removido
     */
    public exclude(id: number): void {
        this.userService
            .deleteUser(id)
            .pipe(take(1))
            .subscribe((data) => {
                this.listUser.splice(id, 1);
                this.showAlert = true;
            });
    }

    /**
     * Método responsável por remover da lista
     * @param id id do elemento a ser removido
     */
    public update(user: User): void {
        const navigationExtras: NavigationExtras = {
            queryParams: user,
        };

        this.router.navigate([`/${ProjectRoutes.HOME}/${ProjectRoutes.USERS}/${ProjectRoutes.NEW}`], navigationExtras);
    }
}
