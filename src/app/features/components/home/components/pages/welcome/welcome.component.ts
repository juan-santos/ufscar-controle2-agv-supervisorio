import { Component } from '@angular/core';
import { ProjectRoutes } from './../../../../../../features/enum/routes.enum';
import { MenuService } from './../../../../../../features/services/menu/menu.service';

@Component({
    selector: 'app-welcome',
    templateUrl: './welcome.component.html',
    styleUrls: ['./welcome.component.scss'],
})
export class WelcomeComponent {
    /**
     *
     * @param menuService Serviço responsável por gerenciar o menu
     */
    constructor(private readonly menuService: MenuService) {
        this.menuService.setMenuItensValue({
            title: 'Módulos disponíveis',
            listItens: [
                {
                    name: 'AGVs',
                    link: `/${ProjectRoutes.HOME}/${ProjectRoutes.AGV}`,
                    icon: 'bi bi-car-front',
                },
                {
                    name: 'Usuários',
                    link: `/${ProjectRoutes.HOME}/${ProjectRoutes.USERS}`,
                    icon: 'bi bi-person-circle',
                },
            ],
        });
    }
}
