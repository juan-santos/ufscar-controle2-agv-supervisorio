import { Component } from '@angular/core';
import { ProjectRoutes } from './../../../../../../features/enum/routes.enum';
import { MenuService } from './../../../../../../features/services/menu/menu.service';

@Component({
    selector: 'app-agv',
    templateUrl: './agv.component.html',
    styleUrls: ['./agv.component.scss'],
})
export class AgvComponent {
    /**
     *
     * @param menuService Serviço responsável por gerenciar o menu
     */
    constructor(private readonly menuService: MenuService) {
        this.menuService.setMenuItensValue({
            title: 'AGVs',
            listItens: [
                {
                    name: 'Adicionar AGV',
                    link:`/${ProjectRoutes.HOME}/${ProjectRoutes.AGV}/${ProjectRoutes.NEW}`,
                    icon: 'bi bi-plus',
                },
                {
                    name: 'Gerenciamento de AGV',
                    link: `/${ProjectRoutes.HOME}/${ProjectRoutes.AGV}/${ProjectRoutes.MANAGEMENT}`,
                    icon: 'bi bi-gear-fill',
                },
            ],
        });
    }
}
