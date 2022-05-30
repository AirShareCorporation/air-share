import { Component, OnInit } from '@angular/core';
import {Location} from "@angular/common";
import {ForumService} from "../../../services/forum/forum.service";
import {ActivatedRoute} from "@angular/router";
import {Response} from "../../../interfaces/response";

@Component({
  selector: 'app-response-detail',
  templateUrl: './response-detail.component.html',
  styleUrls: ['./response-detail.component.scss']
})
export class ResponseDetailComponent implements OnInit {

  response: Response | undefined;

  constructor(
    private location: Location,
    private forumService: ForumService,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.getResponse();
  }

  getResponse(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.forumService.getResponse(id).subscribe(response => this.response = response);
  }

  goBack() {
    this.location.back();
  }

}
