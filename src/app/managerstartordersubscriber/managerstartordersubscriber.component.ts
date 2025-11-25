import { Component } from '@angular/core';
import { ManagersidebarComponent } from '../managersidebar/managersidebar.component';
import { Router } from '@angular/router';
@Component({
  selector: 'app-managerstartordersubscriber',
  standalone: true,
  imports: [ManagersidebarComponent],
  templateUrl: './managerstartordersubscriber.component.html',
  styleUrls: ['./managerstartordersubscriber.component.css'],
})
export class ManagerstartordersubscriberComponent {
  constructor(private router: Router) {}

  goToDeliveryPartner() {
    this.router.navigate(['/manager-orderdelpartnerdetails']);
  }
}
