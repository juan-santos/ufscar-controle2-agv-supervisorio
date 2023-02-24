import { Component, OnInit } from '@angular/core';
import { map, Observable, take } from 'rxjs';
import { ResizebledService } from './../../../../../features/shared/resizebled/service/resizebled/resizebled.service';
import { MenuService } from './../../../../services/menu/menu.service';

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
    public isMobile = false;

    constructor(
        private readonly menuService: MenuService,
        private readonly resizebledService: ResizebledService
    ) {}

    public hideSidebar(): void {
        this.menuService.setMenuValue();
    }

    public ngOnInit(): void {
        this.resizebledService.screenSize.subscribe((data) => {
            this.isMobile = this.resizebledService.isMobile(data);
        });
    }
}
