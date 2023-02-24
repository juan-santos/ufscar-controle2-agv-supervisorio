import { AfterViewInit, Component, ElementRef, NgZone, OnDestroy, ViewChild } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Component({ template: '' })
export abstract class ResizebledComponent implements AfterViewInit, OnDestroy {
    @ViewChild('resizedElement')
    protected readonly _element: ElementRef;

    private _data: BehaviorSubject<ResizeObserverEntry> = new BehaviorSubject<ResizeObserverEntry>(
        null
    );
    private _width: BehaviorSubject<number> = new BehaviorSubject<number>(null);
    private _resizeObserver: ResizeObserver = new ResizeObserver((data) => {
        this._zone.run(() => {
            this._data.next(data[0]);
            this._width.next(data[0].contentRect.width);
        });
    });

    /**
     *
     * @param _zone NgZone
     */
    constructor(protected readonly _zone: NgZone) {}

    /**
     * ngAfterViewInit
     */
    public ngAfterViewInit(): void {
        this.initializeObservable();
    }

    /**
     * Inicializa o observable responsável por obter o tamanho atual de um elemento
     */
    protected initializeObservable(): void {
        if (this._element) {
            this._resizeObserver.observe(this._element.nativeElement);
        }
    }

    /**
     * Retorna observable com os dados referente as dimensões do elemento
     */
    public get resizeObserver(): Observable<ResizeObserverEntry> {
        return this._data.asObservable();
    }

    /**
     * Retorna o observable com a largura referente ao elemento
     */
    public get resizeObserverWidth(): Observable<number> {
        return this._width.asObservable();
    }

    /**
     * Responsável por desinscrever o objeto
     */
    public ngOnDestroy(): void {
        if (this._resizeObserver) {
            this._resizeObserver.unobserve(this._element.nativeElement);
        }
    }
}
