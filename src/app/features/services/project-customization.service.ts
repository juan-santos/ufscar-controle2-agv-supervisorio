import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProjectCustomizationService {

  public get nameSite(): string {
    return 'Nome do site'
  }

  public get logoImage(): string {
    return ''
  }
}
