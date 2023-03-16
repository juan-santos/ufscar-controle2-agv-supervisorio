import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { LoginRepositoryService } from './../../../repository/service/login/login-repository.service';

@Injectable({
    providedIn: 'root',
})
export class LoginService {
    /**
     *
     * @param loginService LoginRepositoryService
     */
    constructor(private loginService: LoginRepositoryService) {}

    /**
     *
     * @param email string
     * @param password string
     * @returns Retorna o resultado da autenticação
     */
    public authenticate(email: string, password: string): Observable<any> {
        return this.loginService.authenticate(email, password);
    }
}
