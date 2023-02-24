import { AfterViewInit, Component, NgZone, OnDestroy } from '@angular/core';
import { debounceTime, distinct, distinctUntilChanged, Observable, Subscription } from 'rxjs';
import { ResizebledComponent } from '../../shared/resizebled/component/resizebled/resizebled.component';
import { ScreenSizeEnum } from '../../shared/resizebled/enum/screen-size.enum';
import { ResizebledService } from '../../shared/resizebled/service/resizebled/resizebled.service';

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.scss'],
})
export class HomeComponent extends ResizebledComponent implements AfterViewInit, OnDestroy {
    private _observable: Subscription;

    constructor(
        private readonly resizebledService: ResizebledService,
        protected readonly _ngZone: NgZone
    ) {
        super(_ngZone);
    }

    /**
     * Método responsável por observar o tamanho do elemento
     */
    public override ngAfterViewInit() {
        super.ngAfterViewInit();

        this._observable = this.resizeObserverWidth.pipe(debounceTime(300)).subscribe((data) => {
            this.resizebledService.setScreenSize(data);
        });
    }

    /**
     * Método responsável por desinscrever observables
     */
    public override ngOnDestroy(): void {
        super.ngOnDestroy();
        this._observable.unsubscribe();
    }

    /**
     * Método responsável por obter o observable do serviço resizebledService
     */
    public get resizebledData(): Observable<ScreenSizeEnum> {
        return this.resizebledService.screenSize;
    }
}
