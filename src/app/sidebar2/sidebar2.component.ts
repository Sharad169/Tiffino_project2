// src/app/sidebar2/sidebar2.component.ts
import { Component } from '@angular/core';
import { RouterModule, Router } from '@angular/router'; // 👈 Import Router
import { Location, CommonModule } from '@angular/common';

@Component({
  selector: 'app-sidebar2',
  standalone: true,
  imports: [RouterModule, CommonModule],
  templateUrl: './sidebar2.component.html',
  styleUrls: ['./sidebar2.component.css'],
})
export class Sidebar2Component {
  // Define the routes that count as "Registration Form" being active
  registrationRoutes = [
    '/managerregi',
    '/superadminchef',
    '/superadmindelpartner',
    '/managerinfo',
  ];

  constructor(private location: Location, private router: Router) {} // 👈 Inject Router

  goBack(): void {
    this.location.back();
  }

  // 🎯 Custom function to check if the current route is one of the registration forms
  isRegistrationActive(): boolean {
    const currentUrl = this.router.url;
    // Check if the current URL starts with any of the registration paths
    return this.registrationRoutes.some((route) =>
      currentUrl.startsWith(route)
    );
  }
}
