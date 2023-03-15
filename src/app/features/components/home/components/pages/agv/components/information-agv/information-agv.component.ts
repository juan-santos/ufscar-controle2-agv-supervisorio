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
  private _state: STATE_AGV = STATE_AGV.STOPED;
  private _observer: Subscription;

  @ViewChild('step')
  private element: ElementRef;

  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private socketService: SocketService
  ) {
    this._observer = this.socketService.listenServer().subscribe((data)=>{
      console.log(data);
    })
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

      if(data){
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

  public ngOnDestroy(): void {
    this._observer.unsubscribe();
  }

  next() {
    this._stepper.next()
  }

}
