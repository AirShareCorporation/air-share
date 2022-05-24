import {Component, OnInit} from '@angular/core';
import {User} from "../../../interfaces/user";
import {ActivatedRoute} from '@angular/router';
import {Location} from '@angular/common';
import {UsersService} from "../../../services/users/users.service";

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.scss']
})
export class UserDetailComponent implements OnInit {

  user: User | undefined;

  constructor(
    private route: ActivatedRoute,
    private userService: UsersService,
    private location: Location
  ) {
  }

  ngOnInit(): void {
    this.getUser();
  }

  getUser(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.userService.getUser(id).subscribe(user => this.user = user);
  }

  goBack() {
    this.location.back();
  }

}
