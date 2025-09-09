import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

interface DepartmentKPI {
  department: string;
  percentage: number;
  target: number;
  achieved: number;
  trend: number;
  icon: string;
  progressClass: string;
  animatedPercentage: number;
}

@Component({
  selector: 'app-performance-page',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './performance-page.html',
  styleUrl: './performance-page.css'
})
export class PerformancePageComponent implements OnInit {
  Math = Math;
  
  departmentKPIs: DepartmentKPI[] = [
    {
      department: 'Sales',
      percentage: 85,
      target: 80,
      achieved: 85,
      trend: 5,
      icon: 'pi-chart-line',
      progressClass: 'progress-sales',
      animatedPercentage: 0
    },
    {
      department: 'Development',
      percentage: 78,
      target: 75,
      achieved: 78,
      trend: 3,
      icon: 'pi-code',
      progressClass: 'progress-development',
      animatedPercentage: 0
    },
    {
      department: 'HR',
      percentage: 92,
      target: 90,
      achieved: 92,
      trend: 2,
      icon: 'pi-users',
      progressClass: 'progress-hr',
      animatedPercentage: 0
    },
    {
      department: 'Marketing',
      percentage: 73,
      target: 80,
      achieved: 73,
      trend: -7,
      icon: 'pi-megaphone',
      progressClass: 'progress-marketing',
      animatedPercentage: 0
    }
  ];

  ngOnInit(): void {
    // Animate progress bars on load
    setTimeout(() => {
      this.departmentKPIs.forEach(kpi => {
        kpi.animatedPercentage = kpi.percentage;
      });
    }, 500);
  }
}
