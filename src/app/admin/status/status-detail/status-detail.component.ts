import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {ForumService} from "../../../services/forum/forum.service";
import {Location} from "@angular/common";
import {Status} from "../../../interfaces/status";

@Component({
  selector: 'app-status-detail',
  templateUrl: './status-detail.component.html',
  styleUrls: ['./status-detail.component.scss']
})
export class StatusDetailComponent implements OnInit {

  status: Status | undefined;

  constructor(
    private route: ActivatedRoute,
    private forumService: ForumService,
    private location: Location
  ) {
  }

  ngOnInit(): void {
    this.getStatus();
  }

  getStatus(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.forumService.getStatus(id).subscribe(status => this.status = status);
  }

  goBack() {
    this.location.back();
  }

}
