import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {Location} from "@angular/common";
import {ForumService} from "../../services/forum/forum.service";
import {Category} from "../../interfaces/category";

@Component({
  selector: 'app-category-detail',
  templateUrl: './category-detail.component.html',
  styleUrls: ['./category-detail.component.scss']
})
export class CategoryDetailComponent implements OnInit {

  category: Category | undefined;

  constructor(
    private route: ActivatedRoute,
    private forumService: ForumService,
    private location: Location
  ) {
  }

  ngOnInit(): void {
    this.getCategory();
  }

  getCategory(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.forumService.getCategory(id).subscribe(category => this.category = category);
  }

  goBack() {
    this.location.back();
  }

}
