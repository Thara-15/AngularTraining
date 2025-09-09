import { Component, ElementRef, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { Chart, registerables } from 'chart.js';

// Register all Chart.js components
Chart.register(...registerables);

@Component({
  selector: 'app-charts',
  standalone: true,
  imports: [],
  templateUrl: './charts.html',
  styleUrl: './charts.css'
})
export class ChartsComponent implements AfterViewInit {
  @ViewChild('deptChart') deptChartRef!: ElementRef<HTMLCanvasElement>;
  @ViewChild('attendanceChart') attendanceChartRef!: ElementRef<HTMLCanvasElement>;
  
  deptChart: Chart | undefined;
  attendanceChart: Chart | undefined;

  ngAfterViewInit() {
    this.initDepartmentChart();
    this.initAttendanceChart();
  }

  initDepartmentChart() {
    const ctx = this.deptChartRef.nativeElement.getContext('2d');
    if (!ctx) return;

    this.deptChart = new Chart(ctx, {
      type: 'doughnut',
      data: {
        labels: ['Engineering', 'HR', 'Marketing', 'Finance', 'Operations', 'Sales'],
        datasets: [{
          data: [65, 15, 40, 30, 25, 73],
          backgroundColor: [
            '#4F46E5', // Indigo
            '#10B981', // Emerald
            '#F59E0B', // Amber
            '#EF4444', // Red
            '#8B5CF6', // Purple
            '#3B82F6'  // Blue
          ],
          borderWidth: 1,
          borderColor: '#ffffff'
        }]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
          legend: {
            position: 'right',
            labels: {
              boxWidth: 12,
              padding: 15
            }
          },
          tooltip: {
            callbacks: {
              label: function(context) {
                const label = context.label || '';
                const value = context.raw as number;
                return `${label}: ${value} employees`;
              }
            }
          }
        },
        animation: {
          animateScale: true,
          animateRotate: true
        }
      }
    });
  }

  initAttendanceChart() {
    const ctx = this.attendanceChartRef.nativeElement.getContext('2d');
    if (!ctx) return;

    this.attendanceChart = new Chart(ctx, {
      type: 'line',
      data: {
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
        datasets: [{
          label: 'Present',
          data: [220, 215, 230, 225, 235, 240],
          borderColor: '#10B981', // Emerald
          backgroundColor: 'rgba(16, 185, 129, 0.1)',
          fill: true,
          tension: 0.4
        }, {
          label: 'Absent',
          data: [28, 33, 18, 23, 13, 8],
          borderColor: '#EF4444', // Red
          backgroundColor: 'rgba(239, 68, 68, 0.1)',
          fill: true,
          tension: 0.4
        }]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        scales: {
          y: {
            beginAtZero: true,
            title: {
              display: true,
              text: 'Number of Employees'
            }
          },
          x: {
            title: {
              display: true,
              text: 'Month'
            }
          }
        },
        plugins: {
          legend: {
            position: 'top',
          },
          tooltip: {
            mode: 'index',
            intersect: false
          }
        },
        animation: {
          duration: 1000,
          easing: 'easeOutQuart'
        }
      }
    });
  }
}
