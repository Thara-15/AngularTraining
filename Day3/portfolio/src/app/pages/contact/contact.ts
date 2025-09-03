import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.html',
  styleUrls: ['./contact.css'],
  standalone: true,
  imports: [CommonModule, FormsModule]
})
export class ContactComponent {
  contactForm = {
    name: '',
    email: '',
    message: ''
  };

  constructor(private router: Router) {}

  onSubmit(): void {
    // Handle form submission here
    console.log('Contact form submitted:', this.contactForm);
    // You can add actual form submission logic here
    alert('Thank you for your message! I will get back to you soon.');
    
    // Reset form
    this.contactForm = {
      name: '',
      email: '',
      message: ''
    };
  }

  navigateTo(path: string): void {
    this.router.navigate([path]);
  }
}
