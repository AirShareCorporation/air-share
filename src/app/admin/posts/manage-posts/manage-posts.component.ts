import {Component, OnInit} from '@angular/core';
import {Topic} from "../../../interfaces/topic";
import {Response} from "../../../interfaces/response";
import {ForumService} from "../../../services/forum/forum.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-manage-posts',
  templateUrl: './manage-posts.component.html',
  styleUrls: ['./manage-posts.component.scss']
})
export class ManagePostsComponent implements OnInit {
  topics: Topic[] = [];

  responses: Response[] = [];

  constructor(private forumService: ForumService, private router: Router) {
  }

  ngOnInit(): void {
    this.getTopics();
    this.getResponses();
  }

  getTopics(): void {
    this.forumService.getTopics().subscribe(topics => this.topics = topics);
  }

  getResponses(): void {
    this.forumService.getResponses().subscribe(responses => this.responses = responses);
  }

  selectTopic(topic: Topic) {
    this.router.navigate(['admin', 'posts', 'topics', 'detail', topic.id]);
  }

  selectResponse(response: Response) {
    this.router.navigate(['admin', 'posts', 'responses', 'detail', response.id]);
  }

  deleteTopic(topic: Topic) {
    this.topics = this.topics.filter(t => t !== topic);
    this.forumService.deleteTopic(topic.id).subscribe();
  }

  deleteResponse(response: Response) {
    this.responses = this.responses.filter(r => r !== response);
    this.forumService.deleteResponse(response.id).subscribe();
  }

}
