import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { BugService } from '../../services/bug.service';

@Component({
  selector: 'app-add-bug',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './add-bug.html',
  styleUrl: './add-bug.css'
})
export class AddBugComponent {
  bugData = {
    title: '',
    project: '',
    priority: '',
    status: 'Open',
    assignee: '',
    environment: '',
    tags: '',
    reproduction: ''
  };

  constructor(private router: Router, private bugService: BugService) {}

  onSubmit() {
    if (this.bugData.title && this.bugData.project && this.bugData.priority) {
      this.bugService.addBug(this.bugData);
      this.router.navigate(['/bugs']);
    } else {
      alert('Please fill required fields: Title, Project, and Priority');
    }
  }

  goBack() {
    this.router.navigate(['/bugs']);
  }
}