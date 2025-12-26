import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Router, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css'],
})
export class SidebarComponent implements OnInit {
  showPopup = false;
  showOrderMenu = false;

  userName: string | null = '';
  userId: string | null = '';

  constructor(private router: Router) {}

  ngOnInit(): void {
    this.userName = sessionStorage.getItem('userName');
    this.userId = sessionStorage.getItem('userId');

    // 🔥 SINGLE SOURCE OF TRUTH
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        this.syncOrderMenuWithRoute(event.urlAfterRedirects);
      }
    });

    // handle page refresh
    this.syncOrderMenuWithRoute(this.router.url);
  }

  /* 🔑 THIS CONTROLS EVERYTHING */
  private syncOrderMenuWithRoute(url: string) {
    this.showOrderMenu =
      url.includes('/currentorders') || url.includes('/orderhistory');
  }

  /* ================= ORDERS ================= */
  toggleOrderMenu() {
    this.showOrderMenu = !this.showOrderMenu;
  }

  navigateCurrentOrders() {
    this.router.navigate(['/currentorders'], {
      queryParams: { tab: 'current' },
    });
  }

  navigatePastOrders() {
    this.router.navigate(['/orderhistory'], {
      queryParams: { tab: 'history' },
    });
  }

  /* ================= OTHER MENUS ================= */
  navigateProfile() {
    this.router.navigate(
      this.userId ? [`/profile/${this.userId}`] : ['/login']
    );
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

  /* ================= LOGOUT ================= */
  showLogoutPopup() {
    this.showPopup = true;
  }

  closePopup() {
    this.showPopup = false;
  }

  confirmLogout() {
    sessionStorage.clear();
    this.router.navigate(['/login']);
  }
}
