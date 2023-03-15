import { AfterViewInit, Component, OnInit } from '@angular/core';
import { ActivatedRoute, Navigation, NavigationStart, Router } from '@angular/router';
import { filter, take } from 'rxjs';
import { USER } from '../../../../../../../interfaces/user.interface';

@Component({
  selector: 'app-information-user',
  templateUrl: './information-user.component.html',
  styleUrls: ['./information-user.component.scss']
})
export class InformationUserComponent implements OnInit {
  public userInfo: USER = null;

  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) {}

  public ngOnInit(): void {
    this.activatedRoute.queryParams.pipe(take(1)).subscribe((data) => {

      if(data){
        this.userInfo = data as USER;
      } else {
        this.router.navigate(['/home/user'])
      }
    })

  }

}
