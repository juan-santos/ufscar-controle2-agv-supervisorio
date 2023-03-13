import { Component } from '@angular/core';
import { MenuService } from './../../../../../../features/services/menu/menu.service';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.scss']
})
export class WelcomeComponent {

  /**
   *
   * @param menuService Serviço responsável por gerenciar o menu
   */
  constructor(private readonly menuService: MenuService,){
    this.menuService.setMenuItensValue({
      title: "Módulos disponíveis",
      listItens: [
        {
          name: 'AGVs',
          link: '/home/agv',
          icon: 'bi bi-car-front'
        },
        {
          name: 'Usuários',
          link: '/home/users',
          icon: 'bi bi-person-circle'
        }
      ]
    });
  }
}
