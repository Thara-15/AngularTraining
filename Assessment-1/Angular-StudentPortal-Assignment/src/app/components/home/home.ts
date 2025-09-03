import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { StudentService } from '../../services/student.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.html',
  styleUrls: ['./home.scss'],
  standalone: true,
  imports: [
    CommonModule,
    RouterModule
  ]
})
export class HomeComponent {
  studentCount: number = 0;
  
  constructor(private studentService: StudentService) {
    this.studentCount = this.studentService.getStudents().length;
  }
}