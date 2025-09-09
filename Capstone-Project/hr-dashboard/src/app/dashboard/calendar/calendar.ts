import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

interface CalendarDay {
  date: number;
  isCurrentMonth: boolean;
  isToday: boolean;
  hasEvents: boolean;
  events?: CalendarEvent[];
}

interface CalendarEvent {
  id: number;
  title: string;
  type: 'meeting' | 'leave' | 'holiday' | 'birthday';
}

@Component({
  selector: 'app-calendar',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './calendar.html',
  styleUrl: './calendar.css'
})
export class CalendarComponent implements OnInit {
  daysOfWeek: string[] = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
  calendarDays: CalendarDay[] = [];
  
  // Sample events data
  events: CalendarEvent[] = [
    { id: 1, title: 'Team Meeting', type: 'meeting' },
    { id: 2, title: 'John on Leave', type: 'leave' },
    { id: 3, title: 'Independence Day', type: 'holiday' },
    { id: 4, title: 'Sarah\'s Birthday', type: 'birthday' },
    { id: 5, title: 'Project Review', type: 'meeting' },
    { id: 6, title: 'Alex on Leave', type: 'leave' },
    { id: 7, title: 'Quarterly Meeting', type: 'meeting' }
  ];

  currentMonth: number = new Date().getMonth();
  currentYear: number = new Date().getFullYear();

  ngOnInit() {
    this.generateCalendarDays();
  }

  getCurrentMonthYear(): string {
    const months = [
      'January', 'February', 'March', 'April', 'May', 'June',
      'July', 'August', 'September', 'October', 'November', 'December'
    ];
    return `${months[this.currentMonth]} ${this.currentYear}`;
  }

  previousMonth(): void {
    if (this.currentMonth === 0) {
      this.currentMonth = 11;
      this.currentYear--;
    } else {
      this.currentMonth--;
    }
    this.generateCalendarDays();
  }

  nextMonth(): void {
    if (this.currentMonth === 11) {
      this.currentMonth = 0;
      this.currentYear++;
    } else {
      this.currentMonth++;
    }
    this.generateCalendarDays();
  }

  generateCalendarDays() {
    // Current date for reference
    const today = new Date();
    
    // First day of the month
    const firstDayOfMonth = new Date(this.currentYear, this.currentMonth, 1);
    const lastDayOfMonth = new Date(this.currentYear, this.currentMonth + 1, 0);
    
    // Days from previous month to show
    const daysFromPrevMonth = firstDayOfMonth.getDay();
    
    // Days from next month to show to complete the grid
    const totalDaysToShow = 42; // 6 rows of 7 days
    
    // Generate calendar days
    this.calendarDays = [];
    
    // Previous month days
    const prevMonthLastDay = new Date(this.currentYear, this.currentMonth, 0).getDate();
    for (let i = prevMonthLastDay - daysFromPrevMonth + 1; i <= prevMonthLastDay; i++) {
      this.calendarDays.push({
        date: i,
        isCurrentMonth: false,
        isToday: false,
        hasEvents: false
      });
    }
    
    // Current month days
    for (let i = 1; i <= lastDayOfMonth.getDate(); i++) {
      // Randomly assign events to some days
      const hasEvents = Math.random() > 0.7;
      let dayEvents: CalendarEvent[] = [];
      
      if (hasEvents) {
        // Randomly select 1-3 events
        const numEvents = Math.floor(Math.random() * 3) + 1;
        for (let j = 0; j < numEvents; j++) {
          const randomEvent = this.events[Math.floor(Math.random() * this.events.length)];
          dayEvents.push(randomEvent);
        }
      }
      
      this.calendarDays.push({
        date: i,
        isCurrentMonth: true,
        isToday: i === today.getDate() && this.currentMonth === today.getMonth() && this.currentYear === today.getFullYear(),
        hasEvents: hasEvents,
        events: dayEvents
      });
    }
    
    // Next month days to fill the grid
    const remainingDays = totalDaysToShow - this.calendarDays.length;
    for (let i = 1; i <= remainingDays; i++) {
      this.calendarDays.push({
        date: i,
        isCurrentMonth: false,
        isToday: false,
        hasEvents: false
      });
    }
  }
}
