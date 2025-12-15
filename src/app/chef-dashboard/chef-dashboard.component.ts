import { Component } from '@angular/core';
import { ChefSidebarComponent } from '../chef-sidebar/chef-sidebar.component';

@Component({
  selector: 'app-chef-dashboard',
  standalone: true,
  imports: [ChefSidebarComponent],
  templateUrl: './chef-dashboard.component.html',
  styleUrls: ['./chef-dashboard.component.css'],
})
export class ChefDashboardComponent {
  isSignedIn: boolean = false; // DEFAULT = Signed Out

  toggleSignIn() {
    if (this.isSignedIn) {
      this.signOut();
    } else {
      this.signIn();
    }
  }

  signIn() {
    console.log('Signed In');
    this.isSignedIn = true;
  }

  signOut() {
    console.log('Signed Out');
    this.isSignedIn = false;
  }
}