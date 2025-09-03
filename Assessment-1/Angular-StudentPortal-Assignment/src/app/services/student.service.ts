import { Injectable, signal } from '@angular/core';
import { Student } from '../models/student.model';

/**
 * Service for managing student data
 */
@Injectable({
  providedIn: 'root'
})
export class StudentService {
  // Using signals for reactive state management
  private students = signal<Student[]>([]);
  private nextId = signal<number>(1);

  constructor() {
    // Add some sample data
    this.addStudent({
      name: 'John Doe',
      email: 'john.doe@example.com',
      age: 20,
      department: 'Computer Science'
    });
    this.addStudent({
      name: 'Jane Smith',
      email: 'jane.smith@example.com',
      age: 22,
      department: 'Mathematics'
    });
  }

  /**
   * Get all students
   */
  getStudents(): Student[] {
    return this.students();
  }

  /**
   * Add a new student
   */
  addStudent(student: Student): void {
    const newStudent = {
      ...student,
      id: this.nextId()
    };
    
    this.students.update(students => [...students, newStudent]);
    this.nextId.update(id => id + 1);
  }

  /**
   * Update an existing student
   */
  updateStudent(updatedStudent: Student): void {
    this.students.update(students => 
      students.map(student => 
        student.id === updatedStudent.id ? updatedStudent : student
      )
    );
  }

  /**
   * Get available departments
   */
  getDepartments(): string[] {
    return [
      'Computer Science',
      'Mathematics',
      'Physics',
      'Chemistry',
      'Biology',
      'Engineering',
      'Business Administration',
      'Economics'
    ];
  }
}