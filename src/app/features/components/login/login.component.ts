import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Route, Router } from '@angular/router';
import { ProjectRoutes } from '../../enum/routes.enum';
import { LoginInterface } from '../../interfaces/login.interface';
import { ProjectCustomizationService } from '../../services/project-customization.service';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {

  public formCliente: FormGroup = this.formBuilder.group({
    email: [null, Validators.required],
    password: [null, Validators.required],
  })

  /**
   *  Construtor do componente LoginComponent
   * @param projectCustomizationService Serviço responsável por armazenar informações customizáveis do site
   */
  constructor(
    private readonly projectCustomizationService: ProjectCustomizationService,
    private readonly formBuilder: FormBuilder,
    private readonly router: Router
    ){
  }

  public ngOnInit(): void {
    this.createForm();
  }

  private createForm() : void {
    this.formCliente = this.formBuilder.group({
      email: [null, Validators.required],
      password: [null, Validators.required],
    })
  }

  public get projectCustomization (): ProjectCustomizationService {
    return this.projectCustomizationService;
  }

  public login(): void {
    const objLogin = this.formCliente.value as LoginInterface;
    this.router.navigate([ProjectRoutes.HOME]);
  }

}
