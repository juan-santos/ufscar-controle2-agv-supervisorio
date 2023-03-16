import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AgvRepositoryService } from './../../../repository/service/agv/agv-repository.service';
import { AGV } from '../../interfaces/agv.interface';

@Injectable({
  providedIn: 'root'
})
export class AgvService {

  constructor(private agvRepositoryService: AgvRepositoryService) { }

  public getListAGV(): Observable<Array<AGV>> {
    return this.agvRepositoryService.getListAGV();
  }

  public saveAGV(): Observable<AGV> {
    return this.agvRepositoryService.saveAGV();
  }

  public createAGV(agv: AGV): Observable<AGV> {
    return this.agvRepositoryService.createAGV(agv);
  }

  public deleteAGV(id: number): Observable<any> {
    return this.agvRepositoryService.deleteAGV(id);
  }

}
