import { Routes } from '@angular/router';
import { StudentRegistrationComponent } from './components/student-registration/student-registration';
import { StudentListComponent } from './components/student-list/student-list';
import { HomeComponent } from './components/home/home';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'register', component: StudentRegistrationComponent },
  { path: 'students', component: StudentListComponent },
  { path: '**', redirectTo: '/' }
];
