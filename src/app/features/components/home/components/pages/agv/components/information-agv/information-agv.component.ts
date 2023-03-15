import { AfterViewInit, Component, ElementRef, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import Stepper from 'bs-stepper';
import { Subscription, take } from 'rxjs';
import { SocketService } from './../../../../../../../../features/services/socket/socket.service';
import { STATE_AGV } from './../../../../../../../../features/enum/state.enum';
import { AGV } from './../../../../../../../../features/interfaces/agv.interface';

@Component({
  selector: 'app-information-agv',
  templateUrl: './information-agv.component.html',
  styleUrls: ['./information-agv.component.scss']
})
export class InformationAgvComponent implements OnInit, AfterViewInit, OnDestroy {
  public enumState = STATE_AGV;
  public agvInfo: AGV = null;

  private _stepper: Stepper;
  private _state: STATE_AGV = STATE_AGV.OFF;
  private _battery: number = 0;
  private _observer: Subscription;
  private _connected: boolean = false;
  private _timeOut: any;

  @ViewChild('step')
  private element: ElementRef;

  /**
   *
   * @param activatedRoute ActivatedRoute
   * @param router Router
   * @param socketService SocketService
   */
  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private socketService: SocketService
  ) {
    this._observer = this.socketService.listenServer().subscribe((data) => {
      this._connected = true;
      this._state = data.status;
      this._battery = data.battery;

      this.updateState();
      this.verifyConnectivity();
    }, () => {
      this.disconnected();
    })
  }

  /**
   * Caso o socket demore mais do que 10s, indico que perdeu a coneção
   */
  private verifyConnectivity(): void {
    if (this._timeOut) {
      clearTimeout(this._timeOut);
    }

    this._timeOut = setTimeout(() => {
      this.disconnected();
    }, 10000);
  }

  /**
   * Altero as variáveis para desconectar o equipamento
   */
  private disconnected(): void {
    this._connected = false;
    this._state = STATE_AGV.OFF;
    this._battery = null;
  }

  /**
   * Método responsável por atualizar o stepper
   */
  private updateState(): void {
    switch (this._state) {
      case STATE_AGV.STOPED:
      case STATE_AGV.EMERGENCY:
      case STATE_AGV.WAITING:
        setTimeout(() => {
          this._stepper.to(1);
          console.log('STOPED | EMERGENCY | WAITING');
        }, 0);
        break;

      case STATE_AGV.WALKING:
        setTimeout(() => {
          this._stepper.to(2);
          console.log('WALKING');
        }, 0);
        break;

      case STATE_AGV.END:
        setTimeout(() => {
          this._stepper.to(3);
          console.log('END');
        }, 0);
        break;
    }
  }

  /**
 * Propriedade responsável por indicar o status atual
 */
  public get connected(): boolean {
    return this._connected;
  }

  /**
   * Propriedade responsável por indicar o status atual
   */
  public get battery(): number {
    return this._battery;
  }

  /**
   * Propriedade responsável por indicar o status atual
   */
  public get state(): STATE_AGV {
    return this._state;
  }

  /**
   * Método ngOnInit
   */
  public ngOnInit(): void {
    this.activatedRoute.queryParams.pipe(take(1)).subscribe((data) => {

      if (data) {
        this.agvInfo = data as AGV;
      } else {
        this.router.navigate(['/home/agv'])
      }
    })
  }

  /**
   * Método ngAfterViewInit
   */
  public ngAfterViewInit(): void {
    this._stepper = new Stepper(this.element.nativeElement, {
      linear: true,
      animation: true
    });
  }

  /**
   * Método responsável por quebrar a conexão
   */
  public ngOnDestroy(): void {
    this._observer.unsubscribe();
  }

}
