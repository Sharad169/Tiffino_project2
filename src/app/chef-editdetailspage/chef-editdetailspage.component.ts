import { Component } from '@angular/core';
import { ChefSidebarComponent } from '../chef-sidebar/chef-sidebar.component';
import { NgIf } from '@angular/common';
@Component({
  selector: 'app-chef-editdetailspage',
  standalone: true,
  imports: [ChefSidebarComponent, NgIf],
  templateUrl: './chef-editdetailspage.component.html',
  styleUrls: ['./chef-editdetailspage.component.css'],
})
export class ChefEditdetailspageComponent {
  showPopup = false;

  popupTitle = '';
  popupMessage = '';

  // SUCCESS POPUP
  showSuccess() {
    this.popupTitle = 'Yohoooo!';
    this.popupMessage = 'Your request is successfully sent';
    this.openPopup();
  }

  // ERROR POPUP
  showError() {
    this.popupTitle = 'oooopsss!!';
    this.popupMessage = 'Request not sent try again.';
    this.openPopup();
  }

  openPopup() {
    this.showPopup = true;

    setTimeout(() => {
      this.showPopup = false;
    }, 2000);
  }
}