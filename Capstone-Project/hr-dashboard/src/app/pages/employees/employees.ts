import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

interface Employee {
  id: number;
  name: string;
  department: string;
  role: string;
  status: 'Active' | 'On Leave' | 'Inactive';
}

@Component({
  selector: 'app-employees',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './employees.html',
  styleUrl: './employees.css'
})
export class EmployeesComponent {
  searchTerm: string = '';
  
  employees: Employee[] = [
    { id: 1, name: 'John Smith', department: 'Development', role: 'Senior Developer', status: 'Active' },
    { id: 2, name: 'Sarah Johnson', department: 'HR', role: 'HR Manager', status: 'Active' },
    { id: 3, name: 'Mike Wilson', department: 'Sales', role: 'Sales Representative', status: 'On Leave' },
    { id: 4, name: 'Emily Davis', department: 'Development', role: 'Frontend Developer', status: 'Active' },
    { id: 5, name: 'David Brown', department: 'Marketing', role: 'Marketing Specialist', status: 'Inactive' },
    { id: 6, name: 'Lisa Anderson', department: 'HR', role: 'Recruiter', status: 'Active' },
    { id: 7, name: 'Tom Miller', department: 'Sales', role: 'Sales Manager', status: 'Active' },
    { id: 8, name: 'Anna Taylor', department: 'Development', role: 'Backend Developer', status: 'On Leave' }
  ];
  
  filteredEmployees: Employee[] = [...this.employees];

  filterEmployees(): void {
    if (!this.searchTerm.trim()) {
      this.filteredEmployees = [...this.employees];
      return;
    }
    
    const term = this.searchTerm.toLowerCase();
    this.filteredEmployees = this.employees.filter(employee => 
      employee.name.toLowerCase().includes(term) ||
      employee.department.toLowerCase().includes(term) ||
      employee.role.toLowerCase().includes(term)
    );
  }

  getInitials(name: string): string {
    return name.split(' ').map(n => n[0]).join('').toUpperCase();
  }

  getStatusClass(status: string): string {
    switch (status) {
      case 'Active': return 'status-active';
      case 'On Leave': return 'status-leave';
      case 'Inactive': return 'status-inactive';
      default: return 'status-inactive';
    }
  }
}
