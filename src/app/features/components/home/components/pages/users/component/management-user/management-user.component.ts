import { ThisReceiver } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';
import { USER } from './../../../../../../../../features/interfaces/user.interface';

@Component({
  selector: 'app-management-user',
  templateUrl: './management-user.component.html',
  styleUrls: ['./management-user.component.scss']
})
export class ManagementUserComponent implements OnInit {

  /**
   *
   */
  constructor(private router: Router){}

  public showAlert = false;
  public listUser: Array<USER> = [
    {
      id: 1,
      name: 'USER da sala 1',
      email: 'userSala1@ufscar.br'
    },
    {
      id: 2,
      name: 'USER da sala 2',
      email: 'userSala2@ufscar.br'
    },
    {
      id: 3,
      name: 'USER da sala 3',
      email: 'userSala3@ufscar.br'
    },
    {
      id: 4,
      name: 'USER da sala 4',
      email: 'userSala4@ufscar.br'
    }
  ]

  public ngOnInit() {

  }


  /**
   * Método responsável por remover da lista
   * @param id id do elemento a ser removido
   */
  public exclude(id: number): void {
    this.listUser.splice(id, 1);
    this.showAlert = true;
    //inserir chamada do backend para remover no banco de dados
  }

  /**
   *
   * @param user User selecionado na tabela
   */
  public redirect(user: USER){
    const navigationExtras: NavigationExtras = {
      queryParams: user
    };

    this.router.navigate(['/home/user/info'], navigationExtras);
  }
}
