import { Component } from '@angular/core';
import { OverviewCardsComponent } from './overview-cards/overview-cards';
import { ChartsComponent } from './charts/charts';
import { EmployeeListComponent } from './employee-list/employee-list';
import { CalendarComponent } from './calendar/calendar';
import { LeaveRequestsComponent } from './leave-requests/leave-requests';
import { PerformanceComponent } from './performance/performance';
import { AnnouncementsComponent } from './announcements/announcements';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [
    OverviewCardsComponent,
    ChartsComponent,
    EmployeeListComponent,
    CalendarComponent,
    LeaveRequestsComponent,
    PerformanceComponent,
    AnnouncementsComponent
  ],
  templateUrl: './dashboard.html',
  styleUrl: './dashboard.css'
})
export class DashboardComponent {}
