import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {ForumService} from "../../../services/forum/forum.service";
import {Location} from "@angular/common";
import {Role} from "../../../interfaces/role";

@Component({
  selector: 'app-role-detail',
  templateUrl: './role-detail.component.html',
  styleUrls: ['./role-detail.component.scss']
})
export class RoleDetailComponent implements OnInit {

  role: Role | undefined;

  constructor(
    private route: ActivatedRoute,
    private forumService: ForumService,
    private location: Location
  ) {
  }

  ngOnInit(): void {
    this.getRole();
  }

  getRole(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.forumService.getRole(id).subscribe(role => this.role = role);
  }

  goBack() {
    this.location.back();
  }

}
