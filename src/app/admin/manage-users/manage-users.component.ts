import { Component, OnInit } from '@angular/core';
import {User} from "../../interfaces/user";
import {USERS} from "../../mocks/mock-users";

@Component({
  selector: 'app-manage-users',
  templateUrl: './manage-users.component.html',
  styleUrls: ['./manage-users.component.scss']
})
export class ManageUsersComponent implements OnInit {

  users: User[] = USERS;

  constructor() { }

  ngOnInit(): void {
  }
}
