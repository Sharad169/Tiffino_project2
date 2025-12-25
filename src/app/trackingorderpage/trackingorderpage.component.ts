import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CommonModule } from '@angular/common';
import { AuthService } from '../service/auth.service';

@Component({
  selector: 'app-trackingorderpage',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './trackingorderpage.component.html',
  styleUrl: './trackingorderpage.component.css',
})
export class TrackingorderpageComponent {
  orderId!: number;
  order: any;
  history: any[] = [];

  constructor(
    private route: ActivatedRoute,
    private authService: AuthService
  ) {}

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
}
