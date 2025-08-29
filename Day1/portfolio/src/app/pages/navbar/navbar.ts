import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.html',
  styleUrls: ['./navbar.css'],
  standalone: true,
  imports: [CommonModule] // needed for *ngFor
})
export class NavbarComponent {
  brand = 'Tharanika Naveen';
  navLinks = [
    { id: 'home', label: 'Home' },
    { id: 'projects', label: 'Projects' }
  ];

  active = 'home';

  scrollTo(id: string) {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
      this.active = id;
    }
  }

  isActive(id: string): boolean {
    return this.active === id;
  }
}
