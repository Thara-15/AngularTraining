import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

interface PerformanceItem {
  id: number;
  name: string;
  value: number;
  description: string;
  lastUpdated: string;
}

@Component({
  selector: 'app-performance',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './performance.html',
  styleUrl: './performance.css'
})
export class PerformanceComponent {
  constructor(private router: Router) {}

  performanceItems: PerformanceItem[] = [
    {
      id: 1,
      name: 'Project Completion',
      value: 85,
      description: 'Current sprint progress',
      lastUpdated: 'Today'
    },
    {
      id: 2,
      name: 'Team Productivity',
      value: 72,
      description: 'Tasks completed on time',
      lastUpdated: 'Yesterday'
    },
    {
      id: 3,
      name: 'Quality Assurance',
      value: 94,
      description: 'Code review pass rate',
      lastUpdated: '2 days ago'
    },
    {
      id: 4,
      name: 'Customer Satisfaction',
      value: 68,
      description: 'Based on recent feedback',
      lastUpdated: 'Last week'
    },
    {
      id: 5,
      name: 'Budget Utilization',
      value: 35,
      description: 'Resources allocation',
      lastUpdated: 'Today'
    }
  ];

  viewDetails(): void {
    this.router.navigate(['/performance']);
  }
}
