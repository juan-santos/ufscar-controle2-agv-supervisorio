import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationExtras, Router } from '@angular/router';
import { AgvService } from './../../../../../../../../features/services/agv/agv.service';
import { AGV } from './../../../../../../../../features/interfaces/agv.interface';
import { take } from 'rxjs';

@Component({
    selector: 'app-management-agv',
    templateUrl: './management-agv.component.html',
    styleUrls: ['./management-agv.component.scss'],
})
export class ManagementAgvComponent implements OnInit {
    /**
     *
     * @param router Router
     * @param activatedRoute ActivatedRoute
     * @param agvService AgvService
     */
    constructor(
        private router: Router,
        private activatedRoute: ActivatedRoute,
        private agvService: AgvService
    ) {}

    public showAlert = false;
    public showMessage = '';
    public listAGV: Array<AGV> = [];

    public ngOnInit() {
        this.agvService
            .getListAGV()
            .pipe(take(1))
            .subscribe((data) => {
                this.listAGV = data;
            });

        this.activatedRoute.queryParams.pipe(take(1)).subscribe((data) => {
            const message = data;
            if (data) {
                this.showMessage = message['text'];
            }
        });
    }

    /**
     * Método responsável por remover da lista
     * @param id id do elemento a ser removido
     */
    public exclude(id: number): void {
        this.agvService
            .deleteAGV(id)
            .pipe(take(1))
            .subscribe((data) => {
                this.listAGV.splice(id, 1);
                this.showAlert = true;
            });
    }

    /**
     * Método responsável por remover da lista
     * @param id id do elemento a ser removido
     */
    public update(agv: AGV): void {
        const navigationExtras: NavigationExtras = {
            queryParams: agv,
        };

        this.router.navigate(['/home/agv/new'], navigationExtras);
    }

    /**
     *
     * @param agv Agv selecionado na tabela
     */
    public redirect(agv: AGV) {
        const navigationExtras: NavigationExtras = {
            queryParams: agv,
        };

        this.router.navigate(['/home/agv/info'], navigationExtras);
    }
}
