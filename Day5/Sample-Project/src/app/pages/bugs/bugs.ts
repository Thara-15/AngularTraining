import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { BugService } from '../../services/bug.service';

@Component({
  selector: 'app-bugs',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './bugs.html',
  styleUrl: './bugs.css'
})
export class BugsComponent {
  bugs: any[] = [];

  constructor(private router: Router, private bugService: BugService) {
    this.bugs = this.bugService.getBugs();
  }

  addNewBug() {
    this.router.navigate(['/add-bug']);
  }
}
