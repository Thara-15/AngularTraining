import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-overview-cards',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './overview-cards.html',
  styleUrl: './overview-cards.css'
})
export class OverviewCardsComponent implements OnInit {
  animateCards = false;

  ngOnInit() {
    // Delay animation to allow page to render first
    setTimeout(() => {
      this.animateCards = true;
    }, 100);
  }
}
