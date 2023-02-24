import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { ScreenSizeEnum } from '../../enum/screen-size.enum';

@Injectable({
    providedIn: 'root',
})
export class ResizebledService {
    private $screenSize: BehaviorSubject<ScreenSizeEnum> = new BehaviorSubject<ScreenSizeEnum>(
        null
    );

    /**
     * Retorna o tamanho atual de um determinado elemento
     */
    public get screenSize(): Observable<ScreenSizeEnum> {
        return this.$screenSize.asObservable();
    }

    /**
     * Método responsável por classificar o tamanho da tela
     * @param size novo tamanho do componente
     */
    public setScreenSize(size: number): void {
        if (!size || size < ScreenSizeEnum.SM) {
            this.$screenSize.next(ScreenSizeEnum.XS);
            return;
        }

        if (size >= ScreenSizeEnum.SM && size < ScreenSizeEnum.MD) {
            this.$screenSize.next(ScreenSizeEnum.SM);
            return;
        }

        if (size >= ScreenSizeEnum.MD && size < ScreenSizeEnum.LG) {
            this.$screenSize.next(ScreenSizeEnum.MD);
            return;
        }

        if (size >= ScreenSizeEnum.LG && size < ScreenSizeEnum.XL) {
            this.$screenSize.next(ScreenSizeEnum.LG);
            return;
        }

        if (size >= ScreenSizeEnum.XL) {
            this.$screenSize.next(ScreenSizeEnum.XL);
        }
    }

    /**
     *
     * @param size Enum referente ao tamanho atual da tela
     * @returns retorna booleano referente ao estado atual da tela
     */
    public isMobile(size: ScreenSizeEnum): boolean {
        return size === ScreenSizeEnum.XS || size === ScreenSizeEnum.SM;
    }
}
