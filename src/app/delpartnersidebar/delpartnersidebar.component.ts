import { Component } from '@angular/core';
import { RouterModule, Router } from '@angular/router';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-delpartnersidebar',
  standalone: true,
  imports: [RouterModule, CommonModule],
  templateUrl: './delpartnersidebar.component.html',
  styleUrls: ['./delpartnersidebar.component.css'],
})
export class DelpartnersidebarComponent {
  constructor(public router: Router) {}

  // -------- ROUTE GROUPS ----------
  dashboardRoutes = ['/delpartnerdashboard', '/delpartnerapplyleave'];

  currentOrderRoutes = [
    '/yourcurrentorderdelpartner',
    '/delpartnercurrentorder',
    '/delpartnerorder',
    '/delpartnerordercomplete',
  ];

  ordersDeliveredRoutes = ['/delpartnerordersdeliverdbyyou'];
  helpSupportRoutes = ['/delpartnerhelpsupportpage'];

  yourDetailsRoutes = [
    '/delpartneryourdetails',
    '/delpartneryourdetailsrequest',
    '/detailsdeliverypartner',
  ];

  // helper function to check active route
  isActive(paths: string[]): boolean {
    return paths.includes(this.router.url);
  }
  goBack() {
    history.back();
  }
}
