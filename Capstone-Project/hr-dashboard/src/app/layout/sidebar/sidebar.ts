import { Component, Output, EventEmitter } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [RouterLink, RouterLinkActive, NgIf],
  templateUrl: './sidebar.html',
  styleUrl: './sidebar.css'
})
export class SidebarComponent {
  collapsed = false;
  
  @Output() sidebarToggled = new EventEmitter<boolean>();

  toggleSidebar() {
    this.collapsed = !this.collapsed;
    this.sidebarToggled.emit(this.collapsed);
  }
}
