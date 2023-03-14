import { ThisReceiver } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';
import { AGV } from './../../../../../../../../features/interfaces/agv.interface';

@Component({
  selector: 'app-management-agv',
  templateUrl: './management-agv.component.html',
  styleUrls: ['./management-agv.component.scss']
})
export class ManagementAgvComponent implements OnInit {

  /**
   *
   */
  constructor(private router: Router){}

  public showAlert = false;
  public listAGV: Array<AGV> = [
    {
      id: 1,
      name: 'AGV da sala 1',
      ip: '127.0.0.1',
    },
    {
      id: 2,
      name: 'AGV da sala 2',
      ip: '127.0.0.1',
    },
    {
      id: 3,
      name: 'AGV da sala 3',
      ip: '127.0.0.1',
    },
    {
      id: 4,
      name: 'AGV da sala 4',
      ip: '127.0.0.1',
    }
  ]

  public ngOnInit() {

  }


  /**
   * Método responsável por remover da lista
   * @param id id do elemento a ser removido
   */
  public exclude(id: number): void {
    this.listAGV.splice(id, 1);
    this.showAlert = true;
    //inserir chamada do backend para remover no banco de dados
  }

  /**
   *
   * @param agv Agv selecionado na tabela
   */
  public redirect(agv: AGV){
    const navigationExtras: NavigationExtras = {
      queryParams: agv
    };

    this.router.navigate(['/home/agv/info'], navigationExtras);
  }
}
