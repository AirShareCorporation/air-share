import { Component, OnInit } from '@angular/core';
import {TOPICS} from "../../mocks/mock-topics";
import {RESPONSES} from "../../mocks/mock-responses";
import {Topic} from "../../interfaces/topic";
import {Response} from "../../interfaces/response";

@Component({
  selector: 'app-manage-posts',
  templateUrl: './manage-posts.component.html',
  styleUrls: ['./manage-posts.component.scss']
})
export class ManagePostsComponent implements OnInit {

  topics: Topic[] = TOPICS;
  responses: Response[] = RESPONSES;

  constructor() { }

  ngOnInit(): void {
  }

}
