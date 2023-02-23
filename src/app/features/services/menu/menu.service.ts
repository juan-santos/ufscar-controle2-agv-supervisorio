import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

export interface MenuInterface {
  showMenu: boolean;
}

@Injectable({
  providedIn: 'root'
})
export class MenuService {
  private $hideMenuObserver = new BehaviorSubject<MenuInterface>({ showMenu: true });

  public hideMenuObserver(): Observable<MenuInterface> {
    return this.$hideMenuObserver.asObservable();
  }

  /**
   *
   * @param show Parametro responsável por exibir/ocultar o menu lateral
   */
  public setMenuValue(): void {
    this.$hideMenuObserver.next({ showMenu: !this.$hideMenuObserver.value.showMenu });
  }
}
