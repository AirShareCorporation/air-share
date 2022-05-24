import { Component, OnInit } from '@angular/core';
import {Topic} from "../interfaces/topic";
import {TOPICS} from "../mocks/mock-topics";
import {User} from "../interfaces/user";
import {UsersService} from "../services/users/users.service";


@Component({
  selector: 'app-forum',
  templateUrl: './forum.component.html',
  styleUrls: ['./forum.component.scss']
})
export class ForumComponent implements OnInit {
  
  topics: Topic[] = TOPICS;

  constructor() { }

  ngOnInit(): void {
  }

}
