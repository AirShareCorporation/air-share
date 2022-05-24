import { Component, OnInit } from '@angular/core';
import {Category} from "../../interfaces/category";
import {ForumService} from "../../services/forum/forum.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-manage-categories',
  templateUrl: './manage-categories.component.html',
  styleUrls: ['./manage-categories.component.scss']
})
export class ManageCategoriesComponent implements OnInit {

  categories: Category[] = [];

  constructor(private forumService: ForumService, private router: Router) { }

  ngOnInit(): void {
    this.getCategories();
  }

  getCategories(): void {
    this.forumService.getCategories().subscribe(categories => this.categories = categories);
  }

  selectCategory(category: Category) {
    this.router.navigate(['admin', 'categories', 'detail', category.id]);
  }

  deleteCategory(category: Category) {
    this.categories = this.categories.filter(c => c !== category);
    this.forumService.deleteCategory(category.id).subscribe();
  }

}
