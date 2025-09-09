import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

interface Employee {
  id: number;
  name: string;
  email: string;
  position: string;
  department: string;
  status: 'Active' | 'On Leave' | 'New';
  avatar: string;
}

@Component({
  selector: 'app-employee-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './employee-list.html',
  styleUrl: './employee-list.css'
})
export class EmployeeListComponent {
  constructor(private router: Router) {}

  employees: Employee[] = [
    {
      id: 1,
      name: 'Jane Cooper',
      email: 'jane.cooper@example.com',
      position: 'Frontend Developer',
      department: 'Engineering',
      status: 'Active',
      avatar: 'https://randomuser.me/api/portraits/women/10.jpg'
    },
    {
      id: 2,
      name: 'Michael Foster',
      email: 'michael.foster@example.com',
      position: 'HR Manager',
      department: 'HR',
      status: 'Active',
      avatar: 'https://randomuser.me/api/portraits/men/1.jpg'
    },
    {
      id: 3,
      name: 'Dries Vincent',
      email: 'dries.vincent@example.com',
      position: 'Marketing Specialist',
      department: 'Marketing',
      status: 'On Leave',
      avatar: 'https://randomuser.me/api/portraits/men/2.jpg'
    },
    {
      id: 4,
      name: 'Lindsay Walton',
      email: 'lindsay.walton@example.com',
      position: 'UX Designer',
      department: 'Engineering',
      status: 'New',
      avatar: 'https://randomuser.me/api/portraits/women/2.jpg'
    },
    {
      id: 5,
      name: 'Courtney Henry',
      email: 'courtney.henry@example.com',
      position: 'Financial Analyst',
      department: 'Finance',
      status: 'Active',
      avatar: 'https://randomuser.me/api/portraits/women/3.jpg'
    }
  ];

  viewAllEmployees(): void {
    this.router.navigate(['/employees']);
  }
}
