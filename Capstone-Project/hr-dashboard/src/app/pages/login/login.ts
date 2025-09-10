import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import { ToastService } from '../../services/toast.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './login.html',
  styleUrl: './login.css'
})
export class LoginComponent {
  username: string = '';
  password: string = '';
  errorMessage: string = '';
  isLoading: boolean = false;

  constructor(
    private authService: AuthService, 
    private router: Router,
    private toastService: ToastService
  ) {}

  onLogin(): void {
    if (!this.username || !this.password) {
      this.errorMessage = 'Please enter both username and password';
      this.toastService.showError('Login Failed', 'Please enter both username and password.');
      return;
    }

    this.isLoading = true;
    this.errorMessage = '';

    // Simulate loading delay for better UX
    setTimeout(() => {
      if (this.authService.login(this.username, this.password)) {
        this.toastService.showLoginSuccess();
      } else {
        this.errorMessage = 'Invalid username or password';
        this.toastService.showLoginError();
      }
      this.isLoading = false;
    }, 1000);
  }
}