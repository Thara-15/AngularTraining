import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.html',
  styleUrls: ['./navbar.css'],
  standalone: true,
  imports: [CommonModule, RouterModule]
})
export class NavbarComponent {
  brand = 'Tharanika Naveen';
  navLinks = [
    { id: 'home', label: 'Home', path: '/', icon: 'pi pi-home' },
    { id: 'projects', label: 'Projects', path: '/projects', icon: 'pi pi-briefcase' },
    { id: 'contact', label: 'Contact', path: '/contact', icon: 'pi pi-envelope' }
  ];

  constructor(private router: Router) {}

  isActive(path: string): boolean {
    if (path === '/') {
      return this.router.url === '/';
    }
    return this.router.url.startsWith(path);
  }

  navigateTo(path: string): void {
    this.router.navigate([path]);
  }
}
