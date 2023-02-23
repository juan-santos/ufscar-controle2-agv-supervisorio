import { Component } from '@angular/core';
import { MenuService } from './../../../../services/menu/menu.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {

  constructor(private readonly menuService: MenuService){

  }

  public hideSidebar(): void {
    this.menuService.setMenuValue();
  }
}
