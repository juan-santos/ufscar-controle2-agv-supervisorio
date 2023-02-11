import { Component } from '@angular/core';
import { ProjectCustomizationService } from '../../services/project-customization.service';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss'],
})
export class LoginComponent {

  /**
   *  Construtor do componente LoginComponent
   * @param projectCustomizationService Serviço responsável por armazenar informações customizáveis do site
   */
  constructor(private readonly projectCustomizationService: ProjectCustomizationService){
  }

  public get projectCustomization (): ProjectCustomizationService {
    return this.projectCustomizationService;
  }

}
