import { Component } from '@angular/core';
import { MenuService } from './../../../../../../features/services/menu/menu.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent {
  /**
   *
   * @param menuService Serviço responsável por gerenciar o menu
    */
  constructor(private readonly menuService: MenuService,) {
    this.menuService.setMenuItensValue({
      title: "Usuários",
      listItens: [
        {
          name: 'Adicionar usuário',
          link: '/home/users/new',
          icon: 'bi bi-person-plus-fill'
        },
        {
          name: 'Gerenciamento de usuários',
          link: '/home/users/management',
          icon: 'bi bi-person-fill-gear'
        }
      ]
    });
  }
}
