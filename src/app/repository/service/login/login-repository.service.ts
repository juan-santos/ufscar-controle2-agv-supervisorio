import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root',
})
export class LoginRepositoryService {
    constructor(private readonly http: HttpClient) {}

    public authenticate(email: string, password: string): Observable<any> {
        return this.http.post('/api/login', { email, password }) as Observable<any>;
    }
}
