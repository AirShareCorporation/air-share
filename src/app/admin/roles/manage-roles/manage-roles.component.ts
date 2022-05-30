import { Component, OnInit } from '@angular/core';
import {ForumService} from "../../../services/forum/forum.service";
import {Router} from "@angular/router";
import {Role} from "../../../interfaces/role";

@Component({
  selector: 'app-manage-roles',
  templateUrl: './manage-roles.component.html',
  styleUrls: ['./manage-roles.component.scss']
})
export class ManageRolesComponent implements OnInit {

  roles: Role[] = [];

  constructor(private forumService: ForumService, private router: Router) { }

  ngOnInit(): void {
    this.getRoles();
  }

  getRoles(): void {
    this.forumService.getRoles().subscribe(roles => this.roles = roles);
  }

  selectCategory(role: Role) {
    this.router.navigate(['admin', 'roles', 'detail', role.id]);
  }

  deleteCategory(role: Role) {
    this.roles = this.roles.filter(r => r !== role);
    this.forumService.deleteCategory(role.id).subscribe();
  }

}
