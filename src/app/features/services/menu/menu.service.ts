import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { MenuItensInterface } from '../../interfaces/menu.interface';

export interface MenuInterface {
    showMenu: boolean;
}

@Injectable({
    providedIn: 'root',
})
export class MenuService {
    private $hideMenuObserver = new BehaviorSubject<MenuInterface>({ showMenu: false });

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

    private $menuItensInterfaceObserver = new BehaviorSubject<MenuItensInterface>(null);

    public menuItensInterfaceObserver(): Observable<MenuItensInterface> {
        return this.$menuItensInterfaceObserver.asObservable();
    }

    /**
     *
     * @param show Parametro responsável por preencher os itens de menu
     */
    public setMenuItensValue(itens: MenuItensInterface): void {
        this.$menuItensInterfaceObserver.next(itens);
    }
}
