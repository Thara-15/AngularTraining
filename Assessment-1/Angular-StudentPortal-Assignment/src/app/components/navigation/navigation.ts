import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.html',
  styleUrls: ['./navigation.scss'],
  standalone: true,
  imports: [
    CommonModule,
    RouterModule
  ]
})
export class NavigationComponent {
  // Navigation component logic can be added here
}
