import {Injectable} from '@angular/core';
import {Observable, of} from 'rxjs';
import {User} from 'src/app/interfaces/user';
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

  deleteUser(id: number): Observable<User[]> {
    return of(USERS.filter(u => u.id !== id));
  }

  addUser(user: User) {
    user.id = USERS.length + 1;
    USERS.push(user);
  }
}
