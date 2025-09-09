import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface AttendanceRecord {
  employeeName: string;
  department: string;
  daysPresent: number;
  daysAbsent: number;
  lateArrivals: number;
  status: 'Excellent' | 'Good' | 'Needs Improvement';
}

@Component({
  selector: 'app-attendance',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './attendance.html',
  styleUrl: './attendance.css'
})
export class AttendanceComponent {
  attendanceRecords: AttendanceRecord[] = [
    { employeeName: 'John Smith', department: 'Development', daysPresent: 22, daysAbsent: 0, lateArrivals: 1, status: 'Excellent' },
    { employeeName: 'Sarah Johnson', department: 'HR', daysPresent: 21, daysAbsent: 1, lateArrivals: 0, status: 'Good' },
    { employeeName: 'Mike Wilson', department: 'Sales', daysPresent: 18, daysAbsent: 4, lateArrivals: 2, status: 'Needs Improvement' },
    { employeeName: 'Emily Davis', department: 'Development', daysPresent: 22, daysAbsent: 0, lateArrivals: 0, status: 'Excellent' },
    { employeeName: 'David Brown', department: 'Marketing', daysPresent: 20, daysAbsent: 2, lateArrivals: 1, status: 'Good' },
    { employeeName: 'Lisa Anderson', department: 'HR', daysPresent: 21, daysAbsent: 1, lateArrivals: 3, status: 'Good' },
    { employeeName: 'Tom Miller', department: 'Sales', daysPresent: 22, daysAbsent: 0, lateArrivals: 0, status: 'Excellent' },
    { employeeName: 'Anna Taylor', department: 'Development', daysPresent: 19, daysAbsent: 3, lateArrivals: 2, status: 'Needs Improvement' }
  ];

  getCurrentMonth(): string {
    const months = [
      'January', 'February', 'March', 'April', 'May', 'June',
      'July', 'August', 'September', 'October', 'November', 'December'
    ];
    return months[new Date().getMonth()];
  }

  getStatusIcon(status: string): string {
    switch (status) {
      case 'Excellent': return 'pi-check-circle status-icon status-present';
      case 'Good': return 'pi-info-circle status-icon status-late';
      case 'Needs Improvement': return 'pi-exclamation-triangle status-icon status-absent';
      default: return 'pi-info-circle status-icon';
    }
  }
}
