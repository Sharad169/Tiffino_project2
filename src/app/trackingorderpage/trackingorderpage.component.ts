import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CommonModule } from '@angular/common';
import { AuthService } from '../service/auth.service';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-trackingorderpage',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './trackingorderpage.component.html',
  styleUrl: './trackingorderpage.component.css',
})
export class TrackingorderpageComponent {
  orderId!: number;
  order: any;
  history: any[] = [];
  showPopup = false;
  experienceRating = 0;
  deliveryRating = 0;
  comment = '';
 
  constructor(
    private route: ActivatedRoute,
    private authService: AuthService
  ) {}
 
  setExperienceRating(value: number) {
    this.experienceRating = value;
  }
 
  setDeliveryRating(value: number) {
    this.deliveryRating = value;
  }
 
  getStatusLabel(status: string): string {
    const statusMap: { [key: string]: string } = {
      PENDING: 'Pending',
      PREPARING: 'Preparing',
      READY_TO_DELIVER: 'Ready to Deliver',
      EN_ROUTE: 'On the Way',
      DELIVERED: 'Delivered',
    };
 
    return statusMap[status] || status;
  }
  ngOnInit(): void {
    this.orderId = Number(this.route.snapshot.paramMap.get('orderId'));
 
    this.loadOrderDetails();
    this.loadTrackingHistory();
 
    setTimeout(() => (this.showPopup = true), 2000);
  }
 
  loadOrderDetails(): void {
    this.authService.getOrderTrackingPageDetails(this.orderId).subscribe({
      next: (res) => (this.order = res),
      error: (err) => console.error(err),
    });
  }
 
  loadTrackingHistory(): void {
    this.authService.getOrderHistoryByorderId(this.orderId).subscribe({
      next: (res) => (this.history = res),
      error: (err) => console.error(err),
    });
  }
 
  // 🔥 Progress logic
  isCompleted(step: string): boolean {
    return this.history.some((h) => h.newStatus === step);
  }
 
  isPending(): boolean {
    return this.order?.status === 'PENDING';
  }
 
  getOrderConfirmationMessage(): string {
    if (this.isPending()) {
      return 'Your order is not confirmed yet. Please wait for approval.';
    }
    return 'Your order is confirmed and is being prepared.';
  }
 
  getDeliveryPartnerMessage(): string {
    if (this.isPending()) {
      return 'Delivery partner will be assigned once the order is approved.';
    }
    return this.order?.deliveryPartnerMessage;
  }
  submitFeedback() {
    if (this.experienceRating === 0 || this.deliveryRating === 0) {
      alert('Please give both ratings');
      return;
    }
 
    const payload = {
      deliveryRating: this.deliveryRating,
      appRating: this.experienceRating,
      Comment: this.comment,
    };
 
    this.authService.rateOrder(this.orderId, payload).subscribe({
      next: (res: string) => {
        alert(res); // 🔥 backend TEXT response
        this.showPopup = false;
      },
      error: (err) => {
        console.error(err);
        alert('Failed to submit feedback');
      },
    });
  }
  closePopup(): void {
    this.showPopup = false;
  }
}
 
 