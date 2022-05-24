import {Component} from '@angular/core';
import {Router, Event, NavigationStart} from "@angular/router";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  isInAdmin: boolean = false;

  constructor(private router: Router) {
    this.router.events.subscribe((event: Event) => {
      if (event instanceof NavigationStart && event.url.split('/')[1] == 'admin') {
        this.isInAdmin = true;
      }else {
        this.isInAdmin = false;
      }
    })
  }

  title = 'air-share';
}
