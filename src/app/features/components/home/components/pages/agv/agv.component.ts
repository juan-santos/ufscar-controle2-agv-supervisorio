import { Component } from '@angular/core';
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
                    link: '/home/agv/new',
                    icon: 'bi bi-plus',
                },
                {
                    name: 'Gerenciamento de AGV',
                    link: '/home/agv/management',
                    icon: 'bi bi-gear-fill',
                },
            ],
        });
    }
}
