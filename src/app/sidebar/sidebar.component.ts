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
  userName: string | null = '';
  userId: string | null = '';

  constructor(private router: Router) {}

  ngOnInit(): void {
    this.userName = sessionStorage.getItem('userName');
    this.userId = sessionStorage.getItem('userId'); // 👈 make sure userId is stored at login
  }

  // ✅ Go to profile with logged-in userId
  navigateProfile() {
    if (this.userId) {
      this.router.navigate([`/profile/${this.userId}`]);
    } else {
      console.error('User ID not found in sessionStorage');
      this.router.navigate(['/login']); // fallback if no id
    }
  }

  navigateOrderHistory() {
    this.router.navigate(['/orderhistory']);
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

  // Logout popup functions
  showLogoutPopup() {
    this.showPopup = true;
  }

  closePopup() {
    this.showPopup = false;
  }

  confirmLogout() {
    this.showPopup = false;
    sessionStorage.clear(); // clear session
    console.log('User logged out');
    this.router.navigate(['/login']); // redirect after logout
  }
}
