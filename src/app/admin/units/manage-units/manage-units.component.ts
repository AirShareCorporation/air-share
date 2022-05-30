import { Component, OnInit } from '@angular/core';
import {ForumService} from "../../../services/forum/forum.service";
import {Router} from "@angular/router";
import {Unit} from "../../../interfaces/unit";

@Component({
  selector: 'app-manage-units',
  templateUrl: './manage-units.component.html',
  styleUrls: ['./manage-units.component.scss']
})
export class ManageUnitsComponent implements OnInit {

  units: Unit[] = [];

  constructor(private forumService: ForumService, private router: Router) { }

  ngOnInit(): void {
    this.getUnits();
  }

  getUnits(): void {
    this.forumService.getUnits().subscribe(units => this.units = units);
  }

  selectCategory(unit: Unit) {
    this.router.navigate(['admin', 'units', 'detail', unit.id]);
  }

  deleteCategory(unit: Unit) {
    this.units = this.units.filter(u => u !== unit);
    this.forumService.deleteCategory(unit.id).subscribe();
  }

}
