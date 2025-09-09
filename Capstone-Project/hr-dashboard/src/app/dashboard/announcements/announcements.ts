import { Component, OnInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

interface Announcement {
  id: number;
  title: string;
  content: string;
  date: string;
  type: 'info' | 'warning' | 'success' | 'urgent';
}

@Component({
  selector: 'app-announcements',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './announcements.html',
  styleUrl: './announcements.css'
})
export class AnnouncementsComponent implements OnInit, OnDestroy {
  constructor(private router: Router) {}

  announcements: Announcement[] = [
    {
      id: 1,
      title: 'Company Picnic',
      content: 'Annual company picnic scheduled for next Saturday at Central Park. All employees are welcome to bring their families.',
      date: 'Today',
      type: 'info'
    },
    {
      id: 2,
      title: 'System Maintenance',
      content: 'The HR portal will be down for maintenance this Sunday from 2 AM to 6 AM. Please plan accordingly.',
      date: 'Yesterday',
      type: 'warning'
    },
    {
      id: 3,
      title: 'New Health Benefits',
      content: 'We have updated our health benefits package. Open enrollment starts next month.',
      date: '2 days ago',
      type: 'success'
    },
    {
      id: 4,
      title: 'Quarterly Review Deadline',
      content: 'All managers must complete quarterly performance reviews by the end of this week.',
      date: '3 days ago',
      type: 'urgent'
    },
    {
      id: 5,
      title: 'Office Renovation',
      content: 'The 3rd floor will be under renovation starting next Monday. Remote work is encouraged during this period.',
      date: 'Last week',
      type: 'info'
    }
  ];

  currentAnnouncementIndex = 0;
  private autoRotateInterval: any;

  ngOnInit(): void {
    // Auto-rotate announcements every 5 seconds
    this.startAutoRotate();
  }

  ngOnDestroy(): void {
    // Clear the interval when component is destroyed
    this.stopAutoRotate();
  }

  startAutoRotate(): void {
    this.autoRotateInterval = setInterval(() => {
      this.rotateAnnouncement();
    }, 5000);
  }

  stopAutoRotate(): void {
    if (this.autoRotateInterval) {
      clearInterval(this.autoRotateInterval);
    }
  }

  rotateAnnouncement(): void {
    this.currentAnnouncementIndex = 
      (this.currentAnnouncementIndex + 1) % this.announcements.length;
  }

  setCurrentAnnouncement(index: number): void {
    // Stop auto-rotation when user manually selects an announcement
    this.stopAutoRotate();
    this.currentAnnouncementIndex = index;
    // Restart auto-rotation after a brief pause
    setTimeout(() => this.startAutoRotate(), 10000);
  }

  viewAllAnnouncements(): void {
    this.router.navigate(['/announcements']);
  }
}
