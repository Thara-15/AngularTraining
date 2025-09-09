import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

interface LeaveRequest {
  id: number;
  name: string;
  avatar: string;
  type: string;
  from: string;
  to: string;
  status: 'Pending' | 'Approved' | 'Rejected';
}

@Component({
  selector: 'app-leave-requests',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './leave-requests.html',
  styleUrl: './leave-requests.css'
})
export class LeaveRequestsComponent {
  constructor(private router: Router) {}

  leaveRequests: LeaveRequest[] = [
    {
      id: 1,
      name: 'Michael Foster',
      avatar: 'https://randomuser.me/api/portraits/men/1.jpg',
      type: 'Vacation',
      from: 'Aug 15, 2023',
      to: 'Aug 22, 2023',
      status: 'Pending'
    },
    {
      id: 2,
      name: 'Lindsay Walton',
      avatar: 'https://randomuser.me/api/portraits/women/2.jpg',
      type: 'Sick Leave',
      from: 'Aug 10, 2023',
      to: 'Aug 12, 2023',
      status: 'Approved'
    },
    {
      id: 3,
      name: 'Dries Vincent',
      avatar: 'https://randomuser.me/api/portraits/men/2.jpg',
      type: 'Personal',
      from: 'Aug 18, 2023',
      to: 'Aug 19, 2023',
      status: 'Rejected'
    },
    {
      id: 4,
      name: 'Courtney Henry',
      avatar: 'https://randomuser.me/api/portraits/women/3.jpg',
      type: 'Vacation',
      from: 'Aug 25, 2023',
      to: 'Sep 05, 2023',
      status: 'Pending'
    }
  ];

  approveRequest(id: number) {
    const request = this.leaveRequests.find(req => req.id === id);
    if (request) {
      request.status = 'Approved';
    }
  }

  rejectRequest(id: number) {
    const request = this.leaveRequests.find(req => req.id === id);
    if (request) {
      request.status = 'Rejected';
    }
  }

  viewAllRequests(): void {
    this.router.navigate(['/leave']);
  }
}
