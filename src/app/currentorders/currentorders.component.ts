import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, ActivatedRoute } from '@angular/router';
import { SidebarComponent } from '../sidebar/sidebar.component';
import { AuthService } from '../service/auth.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-currentorders',
  standalone: true,
  imports: [CommonModule, RouterModule, SidebarComponent],
  templateUrl: './currentorders.component.html',
  styleUrl: './currentorders.component.css',
})
export class CurrentordersComponent {
  orders: any[] = [];
  userId!: number;
 
  activeTab: 'current' | 'history' = 'current';
 
  constructor(
    private authService: AuthService,
    private route: ActivatedRoute,
    private router: Router
  ) {}
 
  goToTracking(orderId: number): void {
    this.router.navigate(['/trackingorderpage', orderId]);
  }
 
  ngOnInit(): void {
    const storedUserId = sessionStorage.getItem('userId');
    this.userId = storedUserId ? Number(storedUserId) : 0;
 
    // ✅ FIXED: properly closed subscribe
    this.route.queryParams.subscribe((params) => {
      this.activeTab = params['tab'] === 'history' ? 'history' : 'current';
 
      if (this.userId > 0) {
        this.loadOrders();
      }
    });
  }
 
  // ✅ LOAD BASED ON TAB
  loadOrders(): void {
    this.authService.getCurrentOrdersByUser(this.userId).subscribe({
      next: (res: any[]) => {
        this.orders = res;
      },
      error: (err: any) => {
        console.error('Order API error', err);
      },
    });
  }
 
  getTotalItems(items: any[]): number {
    return items.reduce((total: number, item: any) => total + item.quantity, 0);
  }
}
 
 