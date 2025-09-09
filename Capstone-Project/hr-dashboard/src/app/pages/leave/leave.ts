import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface LeaveRequest {
  id: number;
  employeeName: string;
  leaveType: 'Sick' | 'Vacation' | 'Personal';
  fromDate: Date;
  toDate: Date;
  status: 'Pending' | 'Approved' | 'Rejected';
}

@Component({
  selector: 'app-leave',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './leave.html',
  styleUrl: './leave.css'
})
export class LeaveComponent {
  leaveRequests: LeaveRequest[] = [
    { id: 1, employeeName: 'John Smith', leaveType: 'Vacation', fromDate: new Date('2024-02-15'), toDate: new Date('2024-02-20'), status: 'Pending' },
    { id: 2, employeeName: 'Sarah Johnson', leaveType: 'Sick', fromDate: new Date('2024-02-10'), toDate: new Date('2024-02-12'), status: 'Approved' },
    { id: 3, employeeName: 'Mike Wilson', leaveType: 'Personal', fromDate: new Date('2024-02-25'), toDate: new Date('2024-02-26'), status: 'Pending' },
    { id: 4, employeeName: 'Emily Davis', leaveType: 'Vacation', fromDate: new Date('2024-03-01'), toDate: new Date('2024-03-05'), status: 'Pending' },
    { id: 5, employeeName: 'David Brown', leaveType: 'Sick', fromDate: new Date('2024-02-08'), toDate: new Date('2024-02-09'), status: 'Rejected' },
    { id: 6, employeeName: 'Lisa Anderson', leaveType: 'Personal', fromDate: new Date('2024-02-22'), toDate: new Date('2024-02-23'), status: 'Approved' }
  ];

  formatDateRange(fromDate: Date, toDate: Date): string {
    const options: Intl.DateTimeFormatOptions = { month: 'short', day: 'numeric' };
    const from = fromDate.toLocaleDateString('en-US', options);
    const to = toDate.toLocaleDateString('en-US', options);
    return `${from} - ${to}`;
  }

  getLeaveTypeClass(leaveType: string): string {
    switch (leaveType) {
      case 'Sick': return 'leave-sick';
      case 'Vacation': return 'leave-vacation';
      case 'Personal': return 'leave-personal';
      default: return 'leave-personal';
    }
  }

  getStatusClass(status: string): string {
    switch (status) {
      case 'Pending': return 'status-pending';
      case 'Approved': return 'status-approved';
      case 'Rejected': return 'status-rejected';
      default: return 'status-pending';
    }
  }

  approveRequest(id: number): void {
    const request = this.leaveRequests.find(r => r.id === id);
    if (request) {
      request.status = 'Approved';
    }
  }

  rejectRequest(id: number): void {
    const request = this.leaveRequests.find(r => r.id === id);
    if (request) {
      request.status = 'Rejected';
    }
  }
}
