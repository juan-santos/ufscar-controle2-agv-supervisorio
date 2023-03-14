import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import Stepper from 'bs-stepper';
import { take } from 'rxjs';
import { AGV } from './../../../../../../../../features/interfaces/agv.interface';

@Component({
  selector: 'app-information-agv',
  templateUrl: './information-agv.component.html',
  styleUrls: ['./information-agv.component.scss']
})
export class InformationAgvComponent implements OnInit, AfterViewInit {
  public agvInfo: AGV = null;
  private stepper: Stepper;
  @ViewChild('step') element: ElementRef;
  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) {}

  public ngOnInit(): void {
    this.activatedRoute.queryParams.pipe(take(1)).subscribe((data) => {

      if(data){
        this.agvInfo = data as AGV;
      } else {
        this.router.navigate(['/home/agv'])
      }
    })
  }

  public ngAfterViewInit(): void {
    this.stepper = new Stepper(this.element.nativeElement, {
      linear: true,
      animation: true
    });
  }

  next() {
    this.stepper.next()
  }

  onSubmit() {
    return false;
  }

}
