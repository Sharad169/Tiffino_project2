import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Router } from '@angular/router';
 
@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css'],
})
export class SidebarComponent {
  showPopup: boolean = false;
 
  constructor(private router: Router) {}
 
  // Sidebar navigation functions
  navigateProfile() {
    this.router.navigate(['/profile']);
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
    console.log('User logged out');
    this.router.navigate(['/login']); // redirect after logout
  }
}
 
 