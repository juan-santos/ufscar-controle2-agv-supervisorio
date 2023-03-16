import { Component } from '@angular/core';
import { ProjectRoutes } from './../../../../../../features/enum/routes.enum';
import { MenuService } from './../../../../../../features/services/menu/menu.service';

@Component({
    selector: 'app-users',
    templateUrl: './users.component.html',
    styleUrls: ['./users.component.scss'],
})
export class UsersComponent {
    /**
     *
     * @param menuService Serviço responsável por gerenciar o menu
     */
    constructor(private readonly menuService: MenuService) {
        this.menuService.setMenuItensValue({
            title: 'Usuários',
            listItens: [
                {
                    name: 'Adicionar usuário',
                    link: `/${ProjectRoutes.HOME}/${ProjectRoutes.USERS}/${ProjectRoutes.NEW}`,
                    icon: 'bi bi-person-plus-fill',
                },
                {
                    name: 'Gerenciamento de usuários',
                    link: `/${ProjectRoutes.HOME}/${ProjectRoutes.USERS}/${ProjectRoutes.MANAGEMENT}`,
                    icon: 'bi bi-person-fill-gear',
                },
            ],
        });
    }
}
