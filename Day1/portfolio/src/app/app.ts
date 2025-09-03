import { Component } from '@angular/core';
import { RouterModule, Router, NavigationEnd } from '@angular/router';
import { filter } from 'rxjs/operators';
import { NavbarComponent } from './pages/navbar/navbar';

@Component({
  selector: 'app-root',
  templateUrl: './app.html',
  styleUrls: ['./app.css'],
  standalone: true,
  imports: [
    RouterModule,   // required for <router-outlet>
    NavbarComponent // required for <app-navbar>
  ]
})
export class AppComponent {
  fixedFooter = true;

  constructor(private router: Router) {
    this.router.events
      .pipe(filter(event => event instanceof NavigationEnd))
      .subscribe((event: any) => {
        // show fixed footer only on projects page
        this.fixedFooter = event.url.includes('projects');
      });
  }
}
