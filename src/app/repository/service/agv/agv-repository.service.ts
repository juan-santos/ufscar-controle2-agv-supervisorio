import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AGV } from './../../../features/interfaces/agv.interface';

@Injectable({
    providedIn: 'root',
})
export class AgvRepositoryService {
    constructor(private readonly http: HttpClient) {}

    public getListAGV(): Observable<Array<AGV>> {
        return this.http.get('/api/agv/list') as Observable<Array<AGV>>;
    }

    public saveAGV(agv: AGV): Observable<any> {
        return this.http.put('/api/agv', { ...agv });
    }

    public createAGV(agv: AGV): Observable<any> {
        return this.http.post('/api/agv', { ...agv });
    }

    public deleteAGV(id: number): Observable<any> {
        return this.http.delete(`/api/agv/${id}`) as Observable<any>;
    }
}
