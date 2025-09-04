import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { AuthGuard } from '../../auth.guard';

@Component({
  selector: 'app-loginn',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './loginn.html',
  styleUrl: './loginn.css'
})
export class LoginnComponent {
  loginData = { username: '', password: '' };
  signupData = { username: '', email: '', password: '' };

  constructor(private router: Router, private authGuard: AuthGuard) {}

  onLogin() {
    if (this.loginData.username === 'admin' && this.loginData.password === '12345') {
      this.authGuard.login();
      this.router.navigate(['/dashboard']);
    } else {
      alert('Invalid credentials! Use username: admin, password: 12345');
    }
  }

  onSignup() {
    if (this.signupData.username && this.signupData.email && this.signupData.password) {
      this.authGuard.login();
      this.router.navigate(['/dashboard']);
    } else {
      alert('Please fill all fields');
    }
  }
}
