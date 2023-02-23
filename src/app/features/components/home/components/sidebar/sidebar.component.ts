import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { MenuInterface, MenuService } from './../../../../services/menu/menu.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent {

  /**
   *
   * @param menuService Serviço responsável por gerenciar a exibição do menu
   */
  constructor(private readonly menuService: MenuService) {
  }

  public get menuObservable(): Observable<MenuInterface> {
    return this.menuService.hideMenuObserver();
  }
}
