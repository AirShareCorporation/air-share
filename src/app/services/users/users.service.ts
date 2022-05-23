import {Injectable} from '@angular/core';
import {Observable, of} from 'rxjs';
import {User} from "../../interfaces/user";
import {USERS} from "../../mocks/mock-users";

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  getUsers(): Observable<User[]> {
    return of(USERS);
  }

  getUser(id: number): Observable<User> {
    const user = USERS.find(u => u.id === id)!;
    return of(user);
  }
}
