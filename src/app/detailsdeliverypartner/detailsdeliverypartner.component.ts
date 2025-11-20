import { Component } from '@angular/core';
import { NgIf } from '@angular/common';
import { DelpartnersidebarComponent } from '../delpartnersidebar/delpartnersidebar.component';

@Component({
  selector: 'app-detailsdeliverypartner',
  standalone: true,
  imports: [DelpartnersidebarComponent, NgIf],
  templateUrl: './detailsdeliverypartner.component.html',
  styleUrls: ['./detailsdeliverypartner.component.css'],
})
export class DetailsdeliverypartnerComponent {
  showPopup = false;

  openPopup() {
    this.showPopup = true;

    setTimeout(() => {
      this.showPopup = false;
    }, 2000); // 10 seconds // hide after 2 sec
  }
}
