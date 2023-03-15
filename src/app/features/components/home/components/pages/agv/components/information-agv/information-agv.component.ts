import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import Stepper from 'bs-stepper';
import { take } from 'rxjs';
import { STATE_AGV } from './../../../../../../../../features/enum/state.enum';
import { AGV } from './../../../../../../../../features/interfaces/agv.interface';

@Component({
  selector: 'app-information-agv',
  templateUrl: './information-agv.component.html',
  styleUrls: ['./information-agv.component.scss']
})
export class InformationAgvComponent implements OnInit, AfterViewInit {
  public enumState = STATE_AGV;
  public agvInfo: AGV = null;

  private _stepper: Stepper;
  private _state: STATE_AGV = STATE_AGV.STOPED;

  @ViewChild('step') element: ElementRef;
  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) {}

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

  next() {
    this._stepper.next()
  }

}
