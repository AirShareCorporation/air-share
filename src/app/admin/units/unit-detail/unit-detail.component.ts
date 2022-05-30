import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {ForumService} from "../../../services/forum/forum.service";
import {Location} from "@angular/common";
import {Unit} from "../../../interfaces/unit";

@Component({
  selector: 'app-unit-detail',
  templateUrl: './unit-detail.component.html',
  styleUrls: ['./unit-detail.component.scss']
})
export class UnitDetailComponent implements OnInit {

  unit: Unit | undefined;

  constructor(
    private route: ActivatedRoute,
    private forumService: ForumService,
    private location: Location
  ) {
  }

  ngOnInit(): void {
    this.getUnit();
  }

  getUnit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.forumService.getUnit(id).subscribe(unit => this.unit = unit);
  }

  goBack() {
    this.location.back();
  }

}
