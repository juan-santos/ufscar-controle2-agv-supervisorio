import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProjectCustomizationService {

  public get nameSite(): string {
    return 'Supervisório AGV'
  }

  public get logoImage(): string {
    return 'http://localhost:4200/assets/image_dc.jpeg'
  }

  public get prymaryColor(): string {
    return '#000';
  }
}
