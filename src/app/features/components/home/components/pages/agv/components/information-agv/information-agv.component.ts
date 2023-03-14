import { AfterViewInit, Component, OnInit } from '@angular/core';
import { ActivatedRoute, Navigation, NavigationStart, Router } from '@angular/router';
import { filter, take } from 'rxjs';
import { AGV } from './../../../../../../../../features/interfaces/agv.interface';

@Component({
  selector: 'app-information-agv',
  templateUrl: './information-agv.component.html',
  styleUrls: ['./information-agv.component.scss']
})
export class InformationAgvComponent implements OnInit {
  public agvInfo: AGV = null;

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

}
