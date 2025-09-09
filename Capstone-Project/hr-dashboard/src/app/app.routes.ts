import { Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login';
import { DashboardComponent } from './dashboard/dashboard';
import { EmployeesComponent } from './pages/employees/employees';
import { AttendanceComponent } from './pages/attendance/attendance';
import { LeaveComponent } from './pages/leave/leave';
import { PerformancePageComponent } from './pages/performance-page/performance-page';
import { AnnouncementsPageComponent } from './pages/announcements-page/announcements-page';
import { AuthGuard } from './guards/auth.guard';

export const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { 
    path: 'dashboard', 
    component: DashboardComponent,
    canActivate: [AuthGuard]
  },
  { 
    path: 'employees', 
    component: EmployeesComponent,
    canActivate: [AuthGuard]
  },
  { 
    path: 'attendance', 
    component: AttendanceComponent,
    canActivate: [AuthGuard]
  },
  { 
    path: 'leave', 
    component: LeaveComponent,
    canActivate: [AuthGuard]
  },
  { 
    path: 'performance', 
    component: PerformancePageComponent,
    canActivate: [AuthGuard]
  },
  { 
    path: 'announcements', 
    component: AnnouncementsPageComponent,
    canActivate: [AuthGuard]
  },
  { path: '**', redirectTo: 'login' }
];
