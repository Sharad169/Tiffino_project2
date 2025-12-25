import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Router } from '@angular/router';

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css'],
})
export class SidebarComponent implements OnInit {
  showPopup: boolean = false;
  showOrderMenu: boolean = false;

  userName: string | null = '';
  userId: string | null = '';

  constructor(private router: Router) {}

  ngOnInit(): void {
    this.userName = sessionStorage.getItem('userName');
    this.userId = sessionStorage.getItem('userId');
  }

  navigateProfile() {
    if (this.userId) {
      this.router.navigate([`/profile/${this.userId}`]);
    } else {
      this.router.navigate(['/login']);
    }
  }
  // ✅ ONLY TOGGLE (NO NAVIGATION)
  toggleOrderMenu() {
    this.showOrderMenu = !this.showOrderMenu;
  }

  // ✅ CURRENT ORDERS → orderhistory page (PENDING)
  navigateCurrentOrders(event: Event) {
    event.stopPropagation();
    this.router.navigate(['/currentorders'], {
      queryParams: { tab: 'current' },
    });
  }

  // ✅ ORDER HISTORY → ALL ORDERS PAGE
  navigatePastOrders(event: Event) {
    event.stopPropagation();
    this.router.navigate(['/orderhistory'], {
      queryParams: { tab: 'history' },
    });
  }

  navigateAddress() {
    this.router.navigate(['/address-page']);
  }

  navigateHelpCenter() {
    this.router.navigate(['/helpcenter']);
  }

  navigatePromocode() {
    this.router.navigate(['/promocode']);
  }

  navigateInviteFriend() {
    this.router.navigate(['/invitefriend']);
  }

  navigatePrivacy() {
    this.router.navigate(['/privacy']);
  }

  navigateDeleteAccount() {
    this.router.navigate(['/deleteaccount1']);
  }

  navigateSubscriptionPlan() {
    this.router.navigate(['/subscriptionplan']);
  }

  showLogoutPopup() {
    this.showPopup = true;
  }

  closePopup() {
    this.showPopup = false;
  }

  confirmLogout() {
    this.showPopup = false;
    sessionStorage.clear();
    this.router.navigate(['/login']);
  }
}
