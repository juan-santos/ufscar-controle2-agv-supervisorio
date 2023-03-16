import { AfterViewInit, Component } from '@angular/core';
import { Router } from '@angular/router';
import { ProjectRoutes } from '../../enum/routes.enum';

@Component({
    selector: 'app-logout',
    templateUrl: './logout.component.html',
    styleUrls: ['./logout.component.scss'],
})
export class LogoutComponent implements AfterViewInit {

  constructor(private router: Router){}

  /**
   * ngAfterViewInit
  */
  public ngAfterViewInit(): void {
    this.router.navigate([ProjectRoutes.LOGIN]);
  }
}
