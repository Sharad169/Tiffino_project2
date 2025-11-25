import { Component } from '@angular/core';
import { NgIf } from '@angular/common';
import { ManagersidebarComponent } from '../managersidebar/managersidebar.component';

@Component({
  selector: 'app-manager-yourdetailssubmitpage',
  standalone: true,
  imports: [ManagersidebarComponent, NgIf],
  templateUrl: './manager-yourdetailssubmitpage.component.html',
  styleUrls: ['./manager-yourdetailssubmitpage.component.css'],
})
export class ManagerYourdetailssubmitpageComponent {
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
