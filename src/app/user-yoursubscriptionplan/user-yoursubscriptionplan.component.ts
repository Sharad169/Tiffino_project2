import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterModule } from '@angular/router';
import { SidebarComponent } from '../sidebar/sidebar.component';
import { AuthService } from '../service/auth.service';

@Component({
  selector: 'app-user-yoursubscriptionplan',
  standalone: true,
  imports: [CommonModule, RouterModule, SidebarComponent],
  templateUrl: './user-yoursubscriptionplan.component.html',
  styleUrl: './user-yoursubscriptionplan.component.css',
})
export class UserYoursubscriptionplanComponent implements OnInit {
  subscriptionStatus: 'ACTIVE' | 'EXPIRED' | 'NONE' = 'NONE';
  isPaused = false;

  userId!: number;

  // 🔹 DATA HOLDERS
  activeSubscription: any = null;
  expiredSubscriptions: any[] = [];

  constructor(private router: Router, private authService: AuthService) {}

  ngOnInit(): void {
    const storedUserId = sessionStorage.getItem('userId');

    if (!storedUserId) {
      this.subscriptionStatus = 'NONE';
      return;
    }

    this.userId = Number(storedUserId);
    this.checkUserSubscription();
  }

  // ================= CHECK SUBSCRIBER =================
  checkUserSubscription(): void {
    this.authService.checkActiveSubscription(this.userId).subscribe({
      next: (isActive) => {
        if (isActive) {
          this.subscriptionStatus = 'ACTIVE';
          this.loadActiveSubscription();
          this.loadExpiredSubscriptions();
        } else {
          this.loadExpiredSubscriptions(true);
        }
      },
      error: () => {
        this.subscriptionStatus = 'NONE';
      },
    });
  }

  // ================= ACTIVE SUB =================
  loadActiveSubscription(): void {
    this.authService.getActiveSubscriptionByUser(this.userId).subscribe({
      next: (response) => {
        // assuming backend returns single active sub
        this.activeSubscription = response;
      },
      error: () => {
        console.error('Failed to load active subscription');
      },
    });
  }

  // ================= EXPIRED SUB =================
  loadExpiredSubscriptions(deriveStatus = false): void {
    this.authService.getExpiredSubscriptionsByUser(this.userId).subscribe({
      next: (response: any[]) => {
        this.expiredSubscriptions = response || [];

        if (deriveStatus) {
          this.subscriptionStatus =
            this.expiredSubscriptions.length > 0 ? 'EXPIRED' : 'NONE';
        }
      },
      error: () => {
        this.subscriptionStatus = 'NONE';
      },
    });
  }

  // ================= UI ACTIONS =================
  togglePlan(): void {
    this.isPaused = !this.isPaused;
  }

  goToSubscribe(): void {
    this.router.navigate(['/user-subscriptionpage']);
  }
  goToSubscriptionPlanDetails(subscriptionId: number): void {
    if (!subscriptionId) {
      console.error('Subscription ID not found');
      return;
    }

    this.router.navigate(['/user-subscriptionplandetails', subscriptionId]);
  }
}
