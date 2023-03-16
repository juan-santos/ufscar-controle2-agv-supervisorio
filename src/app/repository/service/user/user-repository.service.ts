import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from './../../../features/interfaces/user.interface';

@Injectable({
    providedIn: 'root',
})
export class UserRepositoryService {
    constructor(private readonly http: HttpClient) {}

    public getListUser(): Observable<Array<User>> {
        return this.http.get('/api/user/list') as Observable<Array<User>>;
    }

    public saveUser(agv: User): Observable<any> {
        return this.http.put('/api/user', { ...agv });
    }

    public createUser(agv: User): Observable<any> {
        return this.http.post('/api/user', { ...agv });
    }

    public deleteUser(id: number): Observable<any> {
        return this.http.delete(`/api/user/${id}`) as Observable<any>;
    }
}
