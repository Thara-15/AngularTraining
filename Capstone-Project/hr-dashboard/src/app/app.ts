import { Component, OnInit, ViewChild } from '@angular/core';
import { RouterOutlet, Router, NavigationEnd } from '@angular/router';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './layout/navbar/navbar';
import { SidebarComponent } from './layout/sidebar/sidebar';
import { FooterComponent } from './layout/footer/footer';
import { AuthService } from './services/auth.service';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, NavbarComponent, SidebarComponent, FooterComponent, CommonModule],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App implements OnInit {
  showLayout = false;
  sidebarCollapsed = false;
  
  @ViewChild(SidebarComponent) sidebar!: SidebarComponent;

  constructor(private authService: AuthService, private router: Router) {
    // Ensure proper initial routing
    if (!this.authService.isAuthenticated()) {
      this.showLayout = false;
      if (this.router.url !== '/login') {
        this.router.navigate(['/login']);
      }
    }
  }

  ngOnInit() {
    // Check initial authentication status
    this.updateLayoutVisibility();

    // Listen to route changes
    this.router.events.pipe(
      filter(event => event instanceof NavigationEnd)
    ).subscribe(() => {
      this.updateLayoutVisibility();
    });

    // Listen to authentication changes
    this.authService.isLoggedIn$.subscribe(isLoggedIn => {
      if (isLoggedIn && this.router.url === '/login') {
        this.router.navigate(['/dashboard']);
      }
      this.updateLayoutVisibility();
    });
  }

  private updateLayoutVisibility() {
    const isAuthenticated = this.authService.isAuthenticated();
    const isLoginPage = this.router.url === '/login' || this.router.url === '/';
    this.showLayout = isAuthenticated && !isLoginPage;
  }

  onSidebarToggle(collapsed: boolean) {
    this.sidebarCollapsed = collapsed;
  }
}
