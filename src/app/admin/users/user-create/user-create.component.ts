import {Component} from '@angular/core';
import {UsersService} from "../../../services/users/users.service";
import {User} from "../../../interfaces/user";
import {Location} from "@angular/common";

@Component({
  selector: 'app-user-create',
  templateUrl: './user-create.component.html',
  styleUrls: ['./user-create.component.scss']
})
export class UserCreateComponent {

  constructor(private userService: UsersService, private location: Location) {
  }

  addUser(first_name: string, last_name: string, mail_adress: String, password: string, roleId: string) {
    first_name = first_name.trim();
    last_name = last_name.trim();
    mail_adress = mail_adress.trim();
    const role_id = parseInt(roleId, 10);

    this.userService.addUser({
      first_name,
      last_name,
      mail_adress,
      password,
      role_id,
      status_id: 1,
      moderationStatus_id: 1
    } as unknown as User);
  }

  goBack() {
    this.location.back();
  }

}
