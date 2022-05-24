import {Component} from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  isInAdmin: boolean = false;

  constructor(private router: Router) {
    this.router.events.subscribe(() => {
      this.isInAdmin = this.router.url.split('/')[1] === 'admin';
    })
  }

  title = 'air-share';
}
