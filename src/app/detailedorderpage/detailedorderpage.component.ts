import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { AuthService } from '../service/auth.service';
import { SidebarComponent } from '../sidebar/sidebar.component';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-detailedorderpage',
  standalone: true,
  imports: [SidebarComponent, CommonModule, RouterModule],
  templateUrl: './detailedorderpage.component.html',
  styleUrls: ['./detailedorderpage.component.css'],
})
export class DetailedorderpageComponent implements OnInit {
  showHistory = false;

  toggleHistory() {
    this.showHistory = !this.showHistory;
    if (this.showHistory && this.orderHistory.length === 0) {
      this.loadOrderDetailsHistory();
    }
  }
  orderId!: number;
  order: any;
  orderHistory: any[] = [];

  getStatusLabel(status: string): string {
    const statusMap: { [key: string]: string } = {
      PENDING: 'Pending',
      PREPARING: 'Preparing',
      READY_TO_DELIVER: 'Ready to Delivered',
      EN_ROUTE: 'On the Way',
      DELIVERED: 'Delivered',
    };

    return statusMap[status] || status;
  }

  constructor(
    private route: ActivatedRoute,
    private authService: AuthService
  ) {}

  ngOnInit(): void {
    this.orderId = Number(this.route.snapshot.paramMap.get('orderId'));

    if (this.orderId) {
      this.loadOrderDetails();
    }
  }

  loadOrderDetails(): void {
    this.authService.getOrderById(this.orderId).subscribe({
      next: (res) => {
        this.order = res;
      },
      error: (err) => {
        console.error('Order detail error', err);
      },
    });
  }
  loadOrderDetailsHistory(): void {
    this.authService.getOrderHistoryByorderId(this.orderId).subscribe({
      next: (res) => {
        this.orderHistory = res;
      },
      error: (err) => {
        console.error('Order history error', err);
      },
    });
  }
  downloadInvoice(): void {
    if (!this.orderId) return;

    this.authService.downloadInvoice(this.orderId).subscribe({
      next: (blob: Blob) => {
        const url = window.URL.createObjectURL(blob);

        const a = document.createElement('a');
        a.href = url;
        a.download = `invoice_${this.orderId}.pdf`;
        a.click();

        window.URL.revokeObjectURL(url);
      },
      error: (err) => {
        console.error('Invoice download failed', err);
      },
    });
  }
}
