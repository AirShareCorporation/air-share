import {Component, OnInit} from '@angular/core';
import {Location} from "@angular/common";
import {Topic} from "../../../interfaces/topic";
import {ForumService} from "../../../services/forum/forum.service";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-topic-detail',
  templateUrl: './topic-detail.component.html',
  styleUrls: ['./topic-detail.component.scss']
})
export class TopicDetailComponent implements OnInit {

  topic: Topic | undefined;

  constructor(
    private location: Location,
    private forumService: ForumService,
    private route: ActivatedRoute
  ) {
  }

  ngOnInit(): void {
    this.getTopic();
  }

  getTopic(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.forumService.getTopic(id).subscribe(topic => this.topic = topic);
  }

  goBack() {
    this.location.back();
  }

}
