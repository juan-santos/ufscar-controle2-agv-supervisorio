import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Route, Router } from '@angular/router';
import { take } from 'rxjs';
import { ProjectRoutes } from '../../enum/routes.enum';
import { LoginInterface } from '../../interfaces/login.interface';
import { LoginService } from '../../services/login/login.service';
import { ProjectCustomizationService } from '../../services/project-customization/project-customization.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  public formCliente: FormGroup = this.formBuilder.group({
    email: [null, Validators.required],
    password: [null, Validators.required],
  });

  /**
   *
   * @param projectCustomizationService ProjectCustomizationService
   * @param formBuilder FormBuilder
   * @param router Router
   * @param loginService LoginService
   */
  constructor(
    private readonly projectCustomizationService: ProjectCustomizationService,
    private readonly formBuilder: FormBuilder,
    private readonly router: Router,
    private readonly loginService: LoginService,
  ) { }

  /**
   * ngOnInit
   */
  public ngOnInit(): void {
    this.createForm();
  }

  /**
   * Crio o formulario da página
   */
  private createForm(): void {
    this.formCliente = this.formBuilder.group({
      email: [null, Validators.required],
      password: [null, Validators.required],
    });
  }

  /**
   * Retorno as propriedades do projeto
   */
  public get projectCustomization(): ProjectCustomizationService {
    return this.projectCustomizationService;
  }

  /**
   * Método responsável por autenticar o usuário
   */
  public login(): void {
    const objLogin = this.formCliente.value as LoginInterface;
    this.loginService.authenticate(objLogin.email, objLogin.password).pipe(take(1)).subscribe((data) => {
      this.router.navigate([ProjectRoutes.HOME]);
    });
  }
}
