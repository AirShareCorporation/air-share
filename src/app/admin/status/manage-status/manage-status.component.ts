import { Component, OnInit } from '@angular/core';
import {ForumService} from "../../../services/forum/forum.service";
import {Router} from "@angular/router";
import {Status} from "../../../interfaces/status";

@Component({
  selector: 'app-manage-status',
  templateUrl: './manage-status.component.html',
  styleUrls: ['./manage-status.component.scss']
})
export class ManageStatusComponent implements OnInit {

  status: Status[] = [];

  constructor(private forumService: ForumService, private router: Router) { }

  ngOnInit(): void {
    this.getAllStatus();
  }

  getAllStatus(): void {
    this.forumService.getAllStatus().subscribe(status => this.status = status);
  }

  selectCategory(status: Status) {
    this.router.navigate(['admin', 'status', 'detail', status.id]);
  }

  deleteCategory(status: Status) {
    this.status = this.status.filter(s => s !== status);
    this.forumService.deleteCategory(status.id).subscribe();
  }

}
