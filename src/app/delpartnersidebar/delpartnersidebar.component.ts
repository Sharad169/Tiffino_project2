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
  dashboardRoutes = ['/delpartnerdashboard'];

  currentOrderRoutes = [
    '/yourcurrentorderdelpartner',
    '/delpartnercurrentorder',
    '/delpartnerorder',
    '/delpartnerordercomplete',
  ];
  // helper function to check active route
  isActive(paths: string[]): boolean {
    return paths.some((path) => this.router.url.startsWith(path));
  }
}
