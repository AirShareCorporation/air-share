import {Component, OnInit} from '@angular/core';
import {User} from "../../../interfaces/user";
import {UsersService} from "../../../services/users/users.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-manage-users',
  templateUrl: './manage-users.component.html',
  styleUrls: ['./manage-users.component.scss']
})
export class ManageUsersComponent implements OnInit {

  users: User[] = [];

  constructor(private userService: UsersService, private router: Router) {
  }

  ngOnInit(): void {
    this.getUsers();
  }

  getUsers(): void {
    this.userService.getUsers().subscribe(users => this.users = users);
  }

  selectUser(user: User) {
    this.router.navigate(['admin', 'users', 'detail', user.id]);
  }

  deleteUser(user: User) {
    this.users = this.users.filter(u => u !== user);
    this.userService.deleteUser(user.id).subscribe();
  }
}
