import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

export interface ToastMessage {
  id: string;
  severity: 'success' | 'info' | 'warn' | 'error';
  summary: string;
  detail: string;
  life?: number;
}

@Injectable({
  providedIn: 'root'
})
export class ToastService {
  private toasts: ToastMessage[] = [];
  private toastSubject = new BehaviorSubject<ToastMessage[]>([]);
  public toasts$ = this.toastSubject.asObservable();

  constructor() {}

  private addToast(message: Omit<ToastMessage, 'id'>): void {
    const toast: ToastMessage = {
      ...message,
      id: Math.random().toString(36).substr(2, 9),
      life: message.life || 3000
    };
    
    this.toasts.push(toast);
    this.toastSubject.next([...this.toasts]);
    
    // Auto remove after life duration
    setTimeout(() => {
      this.removeToast(toast.id);
    }, toast.life);
  }

  private removeToast(id: string): void {
    this.toasts = this.toasts.filter(toast => toast.id !== id);
    this.toastSubject.next([...this.toasts]);
  }

  showSuccess(summary: string, detail: string, life: number = 3000): void {
    this.addToast({
      severity: 'success',
      summary,
      detail,
      life
    });
  }

  showError(summary: string, detail: string, life: number = 3000): void {
    this.addToast({
      severity: 'error',
      summary,
      detail,
      life
    });
  }

  showInfo(summary: string, detail: string, life: number = 3000): void {
    this.addToast({
      severity: 'info',
      summary,
      detail,
      life
    });
  }

  showWarning(summary: string, detail: string, life: number = 3000): void {
    this.addToast({
      severity: 'warn',
      summary,
      detail,
      life
    });
  }

  // Predefined messages for common actions
  showLoginSuccess(): void {
    this.showSuccess('Login Successful', 'Welcome back! You have been successfully logged in.');
  }

  showLoginError(): void {
    this.showError('Login Failed', 'Invalid username or password. Please try again.');
  }

  showLogoutSuccess(): void {
    this.showInfo('Logged Out', 'You have been successfully logged out.');
  }

  showApprovalSuccess(): void {
    this.showSuccess('Request Approved', 'The leave request has been approved successfully.');
  }

  showRejectionSuccess(): void {
    this.showWarning('Request Rejected', 'The leave request has been rejected.');
  }

  showCustomMessage(message: Omit<ToastMessage, 'id'>): void {
    this.addToast(message);
  }

  clear(): void {
    this.toasts = [];
    this.toastSubject.next([]);
  }

  removeToastById(id: string): void {
    this.removeToast(id);
  }
}