import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-user-itemdeliverdpage',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './user-itemdeliverdpage.component.html',
  styleUrl: './user-itemdeliverdpage.component.css',
})
export class UserItemdeliverdpageComponent {
  showPopup = false;
  experienceRating = 0;
  deliveryRating = 0;
  comment = '';

  ngOnInit() {
    // Auto-show popup 2 seconds after page loads (simulate delivery completed)
    setTimeout(() => (this.showPopup = true), 2000);
  }

  setExperienceRating(rating: number) {
    this.experienceRating = rating;
  }

  setDeliveryRating(rating: number) {
    this.deliveryRating = rating;
  }

  submitFeedback() {
    console.log('Experience:', this.experienceRating);
    console.log('Delivery:', this.deliveryRating);
    console.log('Comment:', this.comment);
    this.showPopup = false;
  }
}
