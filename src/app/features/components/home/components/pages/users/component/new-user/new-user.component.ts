import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, NavigationExtras, Router } from '@angular/router';
import { take } from 'rxjs';
import { ProjectRoutes } from './../../../../../../../../features/enum/routes.enum';
import { User } from 'src/app/features/interfaces/user.interface';
import { UserService } from './../../../../../../../../features/services/user/user-service.service';

@Component({
    selector: 'app-new-user',
    templateUrl: './new-user.component.html',
    styleUrls: ['./new-user.component.scss'],
})
export class NewUserComponent {
  public title: string = '';
  public isNew = true;

  public formCliente: FormGroup = this.formBuilder.group({
      name: [null, [Validators.required, Validators.minLength(5)]],
      email: [null, [Validators.required, Validators.email]],
  });

  /**
   *
   * @param formBuilder FormBuilder
   * @param activatedRoute ActivatedRoute
   * @param router Router
   * @param userService AgvService
   */
  constructor(
      private readonly formBuilder: FormBuilder,
      private readonly activatedRoute: ActivatedRoute,
      private readonly router: Router,
      private readonly userService: UserService
  ) {}

  /**
   * Método ngOnInit
   */
  public ngOnInit(): void {
      this.activatedRoute.queryParams.pipe(take(1)).subscribe((data) => {
          const agv = data as User;

          if (agv && agv.id) {
              this.title = 'Alteração de usuário';
              this.formCliente.controls['name'].setValue(agv.name);
              this.formCliente.controls['email'].setValue(agv.email);
              this.isNew = false;
          } else {
              this.title = 'Cadastro de usuário';
          }
      });
  }

  /**
   * save
   */
  public save(): void {
      this.userService
          .saveUser(this.formCliente.value)
          .pipe(take(1))
          .subscribe(() => {
              const navigationExtras: NavigationExtras = {
                  queryParams: {
                      text: 'Usuário alterado com sucesso',
                  },
              };
              this.router.navigate([`/${ProjectRoutes.HOME}/${ProjectRoutes.USERS}/${ProjectRoutes.MANAGEMENT}`], navigationExtras);
          });
  }

  /**
   * newUser
   */
  public newUser(): void {
      this.userService
          .createUser(this.formCliente.value)
          .pipe(take(1))
          .subscribe(() => {
              const navigationExtras: NavigationExtras = {
                  queryParams: {
                      text: 'Usuário cadastrado com sucesso',
                  },
              };
              this.router.navigate([`/${ProjectRoutes.HOME}/${ProjectRoutes.USERS}/${ProjectRoutes.MANAGEMENT}`], navigationExtras);
          });
  }
}
