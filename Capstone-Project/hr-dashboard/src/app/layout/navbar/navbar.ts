import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';

interface Notification {
  id: number;
  title: string;
  message: string;
  date: Date;
  read: boolean;
}

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './navbar.html',
  styleUrl: './navbar.css'
})
export class NavbarComponent {
  showNotifications = false;
  
  notifications: Notification[] = [
    {
      id: 1,
      title: 'New Employee Onboarding',
      message: 'Welcome session scheduled for new hires',
      date: new Date('2024-02-15'),
      read: false
    },
    {
      id: 2,
      title: 'System Maintenance',
      message: 'Scheduled maintenance this weekend',
      date: new Date('2024-02-14'),
      read: false
    },
    {
      id: 3,
      title: 'Team Meeting',
      message: 'Monthly team sync at 2 PM today',
      date: new Date('2024-02-13'),
      read: true
    },
    {
      id: 4,
      title: 'Holiday Notice',
      message: 'Office closed on Presidents Day',
      date: new Date('2024-02-12'),
      read: true
    }
  ];

  constructor(private authService: AuthService, private router: Router) {}

  get unreadCount(): number {
    return this.notifications.filter(n => !n.read).length;
  }

  get recentNotifications(): Notification[] {
    return this.notifications.slice(0, 5);
  }

  toggleNotifications(): void {
    this.showNotifications = !this.showNotifications;
  }

  markAsRead(notification: Notification): void {
    notification.read = true;
  }

  viewAllAnnouncements(): void {
    this.showNotifications = false;
    this.router.navigate(['/announcements']);
  }

  logout(): void {
    this.authService.logout();
  }

  formatDate(date: Date): string {
    const now = new Date();
    const diffTime = Math.abs(now.getTime() - date.getTime());
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    
    if (diffDays === 1) return 'Today';
    if (diffDays === 2) return 'Yesterday';
    if (diffDays <= 7) return `${diffDays - 1} days ago`;
    
    return date.toLocaleDateString('en-US', { month: 'short', day: 'numeric' });
  }
}
