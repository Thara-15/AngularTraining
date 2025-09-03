import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { StudentService } from '../../services/student.service';
import { Student } from '../../models/student.model';

@Component({
  selector: 'app-student-registration',
  templateUrl: './student-registration.html',
  styleUrls: ['./student-registration.scss'],
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule
  ]
})
export class StudentRegistrationComponent implements OnInit {
  registrationForm!: FormGroup;
  submitted = false;
  departments: string[] = ['Computer Science', 'Engineering', 'Business', 'Arts', 'Medicine'];

  constructor(
    private fb: FormBuilder,
    private studentService: StudentService
  ) {}

  ngOnInit() {
    this.initForm();
  }

  initForm() {
    this.registrationForm = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(3)]],
      email: ['', [Validators.required, Validators.email]],
      age: ['', [Validators.required, Validators.min(16), Validators.max(45)]],
      department: ['', Validators.required]
    });
  }

  get f() {
    return this.registrationForm.controls;
  }

  onSubmit() {
    this.submitted = true;

    if (this.registrationForm.invalid) {
      return;
    }

    const student: Student = {
      id: Date.now().toString(),
      ...this.registrationForm.value
    };

    this.studentService.addStudent(student);
    this.resetForm();
  }

  resetForm() {
    this.submitted = false;
    this.registrationForm.reset();
  }
}
