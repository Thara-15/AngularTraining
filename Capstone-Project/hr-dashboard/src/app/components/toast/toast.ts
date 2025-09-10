import { Component, OnInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Subscription } from 'rxjs';
import { ToastService, ToastMessage } from '../../services/toast.service';

@Component({
  selector: 'app-toast',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="toast-container">
      <div 
        *ngFor="let toast of toasts" 
        class="toast"
        [ngClass]="getToastClass(toast.severity)"
        (click)="removeToast(toast.id)"
      >
        <div class="toast-icon">
          <i [ngClass]="getIconClass(toast.severity)"></i>
        </div>
        <div class="toast-content">
          <div class="toast-summary">{{ toast.summary }}</div>
          <div class="toast-detail">{{ toast.detail }}</div>
        </div>
        <button class="toast-close" (click)="removeToast(toast.id)">
          <i class="pi pi-times"></i>
        </button>
      </div>
    </div>
  `,
  styles: [`
    .toast-container {
      position: fixed;
      top: 20px;
      right: 20px;
      z-index: 9999;
      display: flex;
      flex-direction: column;
      gap: 10px;
      max-width: 400px;
    }

    .toast {
      display: flex;
      align-items: flex-start;
      padding: 16px;
      border-radius: 8px;
      box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
      cursor: pointer;
      transition: all 0.3s ease;
      animation: slideIn 0.3s ease;
      min-width: 300px;
    }

    .toast:hover {
      transform: translateX(-5px);
      box-shadow: 0 6px 20px rgba(0, 0, 0, 0.2);
    }

    .toast-icon {
      margin-right: 12px;
      margin-top: 2px;
    }

    .toast-icon i {
      font-size: 18px;
    }

    .toast-content {
      flex: 1;
    }

    .toast-summary {
      font-weight: 600;
      font-size: 14px;
      margin-bottom: 4px;
    }

    .toast-detail {
      font-size: 13px;
      opacity: 0.9;
      line-height: 1.4;
    }

    .toast-close {
      background: none;
      border: none;
      cursor: pointer;
      padding: 4px;
      margin-left: 8px;
      opacity: 0.7;
      transition: opacity 0.2s ease;
    }

    .toast-close:hover {
      opacity: 1;
    }

    .toast-close i {
      font-size: 12px;
    }

    /* Severity styles */
    .toast-success {
      background: linear-gradient(135deg, #10b981, #059669);
      color: white;
    }

    .toast-error {
      background: linear-gradient(135deg, #ef4444, #dc2626);
      color: white;
    }

    .toast-warn {
      background: linear-gradient(135deg, #f59e0b, #d97706);
      color: white;
    }

    .toast-info {
      background: linear-gradient(135deg, #3b82f6, #2563eb);
      color: white;
    }

    @keyframes slideIn {
      from {
        transform: translateX(100%);
        opacity: 0;
      }
      to {
        transform: translateX(0);
        opacity: 1;
      }
    }

    @media (max-width: 480px) {
      .toast-container {
        right: 10px;
        left: 10px;
        max-width: none;
      }
      
      .toast {
        min-width: auto;
      }
    }
  `]
})
export class ToastComponent implements OnInit, OnDestroy {
  toasts: ToastMessage[] = [];
  private subscription: Subscription = new Subscription();

  constructor(private toastService: ToastService) {}

  ngOnInit(): void {
    this.subscription = this.toastService.toasts$.subscribe((toasts: ToastMessage[]) => {
      this.toasts = toasts;
    });
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  getToastClass(severity: string): string {
    return `toast-${severity}`;
  }

  getIconClass(severity: string): string {
    switch (severity) {
      case 'success': return 'pi pi-check-circle';
      case 'error': return 'pi pi-times-circle';
      case 'warn': return 'pi pi-exclamation-triangle';
      case 'info': return 'pi pi-info-circle';
      default: return 'pi pi-info-circle';
    }
  }

  removeToast(id: string): void {
    this.toastService.removeToastById(id);
  }
}
