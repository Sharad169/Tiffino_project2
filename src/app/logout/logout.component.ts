import { Component } from '@angular/core';
import { RouterModule, Router } from '@angular/router';
import { SidebarComponent } from '../sidebar/sidebar.component';
@Component({
  selector: 'app-logout',
  standalone: true,
  imports: [RouterModule, SidebarComponent],
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.css'],
})
export class LogoutComponent {
  showPopup: boolean = false; // controls logout popup

  constructor(private router: Router) {}

  // Sidebar click handlers
  showLogoutPopup() {
    this.showPopup = true;
  }

  navigateToProfile() {
    this.router.navigate(['/profile']);
  }

  navigateToHome() {
    this.router.navigate(['/home']);
  }

  // Popup buttons
  closePopup() {
    this.showPopup = false;
  }

  confirmLogout() {
    this.showPopup = false;
    console.log('User logged out');
    this.router.navigate(['/login']); // redirect to login after logout
  }
}
