import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Announcement {
  id: number;
  title: string;
  message: string;
  date: Date;
  author: string;
  priority: 'High' | 'Medium' | 'Low';
}

@Component({
  selector: 'app-announcements-page',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './announcements-page.html',
  styleUrl: './announcements-page.css'
})
export class AnnouncementsPageComponent {
  announcements: Announcement[] = [
    {
      id: 1,
      title: 'New Health Insurance Policy',
      message: 'We are pleased to announce our new comprehensive health insurance policy that will take effect from March 1st. All employees will receive enhanced coverage including dental and vision care.',
      date: new Date('2024-02-15'),
      author: 'HR Department',
      priority: 'High'
    },
    {
      id: 2,
      title: 'Office Renovation Schedule',
      message: 'The office renovation will begin on February 20th and is expected to complete by March 15th. During this period, some areas may be temporarily inaccessible.',
      date: new Date('2024-02-12'),
      author: 'Facilities Management',
      priority: 'Medium'
    },
    {
      id: 3,
      title: 'Team Building Event',
      message: 'Join us for our quarterly team building event on March 5th at the city park. Activities include games, BBQ, and networking opportunities.',
      date: new Date('2024-02-10'),
      author: 'HR Department',
      priority: 'Low'
    },
    {
      id: 4,
      title: 'Security System Update',
      message: 'Our building security system will be updated this weekend. Please ensure you have your updated access cards ready for Monday morning.',
      date: new Date('2024-02-08'),
      author: 'Security Team',
      priority: 'High'
    },
    {
      id: 5,
      title: 'New Employee Welcome',
      message: 'Please join us in welcoming our new team members who will be starting next week. A welcome lunch will be held on Monday at 12:30 PM.',
      date: new Date('2024-02-05'),
      author: 'HR Department',
      priority: 'Low'
    }
  ];

  formatDate(date: Date): string {
    return date.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric'
    });
  }

  getPriorityClass(priority: string): string {
    switch (priority) {
      case 'High': return 'priority-high';
      case 'Medium': return 'priority-medium';
      case 'Low': return 'priority-low';
      default: return 'priority-low';
    }
  }
}
