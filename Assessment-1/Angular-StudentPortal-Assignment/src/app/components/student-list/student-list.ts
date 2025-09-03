import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Student } from '../../models/student.model';
import { StudentService } from '../../services/student.service';

@Component({
  selector: 'app-student-list',
  templateUrl: './student-list.html',
  styleUrls: ['./student-list.scss'],
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule
  ]
})
export class StudentListComponent implements OnInit {
  students: Student[] = [];
  selectedStudent: Student | null = null;
  displayDialog: boolean = false;
  editForm!: FormGroup;
  submitted: boolean = false;
  departments: string[] = ['Computer Science', 'Engineering', 'Business', 'Arts', 'Medicine'];

  constructor(
    private studentService: StudentService,
    private fb: FormBuilder
  ) {}

  ngOnInit() {
    this.loadStudents();
    this.initForm();
  }

  loadStudents() {
    this.students = this.studentService.getStudents();
  }

  initForm() {
    this.editForm = this.fb.group({
      id: [''],
      name: ['', [Validators.required, Validators.minLength(3)]],
      email: ['', [Validators.required, Validators.email]],
      age: ['', [Validators.required, Validators.min(16), Validators.max(45)]],
      department: ['', Validators.required]
    });
  }

  get f() {
    return this.editForm.controls;
  }

  onRowSelect(student: Student) {
    this.selectedStudent = { ...student };
    this.editForm.patchValue(this.selectedStudent);
    this.displayDialog = true;
  }

  hideDialog() {
    this.displayDialog = false;
    this.submitted = false;
  }

  saveStudent() {
    this.submitted = true;

    if (this.editForm.invalid) {
      return;
    }

    const updatedStudent: Student = this.editForm.value;
    
    if (this.selectedStudent) {
      this.studentService.updateStudent(updatedStudent);
    }

    this.hideDialog();
    this.loadStudents();
  }
}
