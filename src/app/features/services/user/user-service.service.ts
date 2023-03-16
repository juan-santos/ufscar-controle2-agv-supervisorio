import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { UserRepositoryService } from './../../../repository/service/user/user-repository.service';
import { User } from '../../interfaces/user.interface';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private userRepositoryService: UserRepositoryService) {}

    public getListUser(): Observable<Array<User>> {
        return this.userRepositoryService.getListUser();
    }

    public saveUser(user: User): Observable<User> {
        return this.userRepositoryService.saveUser(user);
    }

    public createUser(user: User): Observable<User> {
        return this.userRepositoryService.createUser(user);
    }

    public deleteUser(id: number): Observable<any> {
        return this.userRepositoryService.deleteUser(id);
    }
}
