import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { MenuItensInterface } from 'src/app/features/interfaces/menu.interface';
import { ResizebledService } from './../../../../../features/shared/resizebled/service/resizebled/resizebled.service';
import { MenuInterface, MenuService } from './../../../../services/menu/menu.service';

@Component({
    selector: 'app-sidebar',
    templateUrl: './sidebar.component.html',
    styleUrls: ['./sidebar.component.scss'],
})
export class SidebarComponent {
    public isMobile = false;
    public classMobile = '';

    /**
     *
     * @param menuService Serviço responsável por gerenciar a exibição do menu
     * @param resizebledService ResizebledService
     */
    constructor(
        private readonly menuService: MenuService,
        private readonly resizebledService: ResizebledService
    ) {}

    /**
     * menuObservable
     */
    public get menuObservable(): Observable<MenuInterface> {
        return this.menuService.hideMenuObserver();
    }

    /**
     * menuItens
     */
    public get menuItens(): Observable<MenuItensInterface> {
        return this.menuService.menuItensInterfaceObserver();
    }

    /**
     * ngOnInit
     */
    public ngOnInit(): void {
        this.resizebledService.screenSize.subscribe((data) => {
            this.isMobile = this.resizebledService.isMobile(data);
            this.classMobile = this.isMobile
                ? 'sidebar__mobile sidebar__mobile'
                : 'sidebar sidebar';
        });
    }

    /**
     * closeSidebar
     */
    public closeSidebar(): void {
        this.menuService.setMenuValue();
    }
}
