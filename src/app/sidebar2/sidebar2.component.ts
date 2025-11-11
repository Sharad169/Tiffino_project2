import { Component } from '@angular/core';
import { RouterModule, Router } from '@angular/router';
import { Location, CommonModule } from '@angular/common';

@Component({
  selector: 'app-sidebar2',
  standalone: true,
  imports: [RouterModule, CommonModule],
  templateUrl: './sidebar2.component.html',
  styleUrls: ['./sidebar2.component.css'],
})
export class Sidebar2Component {
  // ✅ Registration Form group
  registrationRoutes = [
    '/managerregi',
    '/superadminchef',
    '/superadmindelpartner',
    '/managerinfo',
  ];
  //Cloud Kitchen registration route
  cloudKitchenRoutes = ['/superadmincloudkitchen'];

  // ✅ List of Kitchen group
  kitchenRoutes = ['/superadminkitchen', '/superadminkitchendetails'];

  // ✅ List of Employee group
  employeeRoutes = [
    '/listemployee',
    '/superadminmanagerdetails',
    '/superadminchefdetails',
    '/superadmindelpartnerdetails',
    '/superadminmanagerlist',
    '/superadmincheflist',
    '/superadmindelpartnerlist',
  ];

  // ✅ Edit Employee route
  editEmployeeRoutes = [
    '/superadmineditlist',
    '/superadminmanagereditpage',
    '/superadminchefeditpage',
    '/superadmindelpartnereditpage',
  ];
  //Subscriber route
  subscriberListRoutes = ['/superadminsubscriberlist'];

  //Superadminaddingmeal route
  superadminaddingmeal = ['/superadminaddingcuisine', '/superadminmeal'];

  constructor(private location: Location, private router: Router) {}

  goBack(): void {
    this.location.back();
  }

  // ✅ Registration Form active
  isRegistrationActive(): boolean {
    const currentUrl = this.router.url;
    return (
      this.registrationRoutes.some((route) => currentUrl.startsWith(route)) &&
      !this.employeeRoutes.some((route) => currentUrl.startsWith(route)) &&
      !this.kitchenRoutes.some((route) => currentUrl.startsWith(route)) &&
      !this.editEmployeeRoutes.some((route) => currentUrl.startsWith(route))
    );
  }
  isCloudKitchenActive(): boolean {
    const currentUrl = this.router.url;
    return this.cloudKitchenRoutes.some((r) => currentUrl.startsWith(r));
  }
  // ✅ List of Kitchen active
  isKitchenActive(): boolean {
    const currentUrl = this.router.url;
    return this.kitchenRoutes.some((route) => currentUrl.startsWith(route));
  }

  // ✅ List of Employee active
  isEmployeeActive(): boolean {
    const currentUrl = this.router.url;
    return this.employeeRoutes.some((route) => currentUrl.startsWith(route));
  }

  // ✅ Edit Employee active
  isEditEmployeeActive(): boolean {
    const currentUrl = this.router.url;
    return this.editEmployeeRoutes.some((route) =>
      currentUrl.startsWith(route)
    );
  }
  isSubscriberListActive(): boolean {
    const currentUrl = this.router.url;
    return this.subscriberListRoutes.some((r) => currentUrl.startsWith(r));
  }

  isSuperadminaddingmealActive(): boolean {
    const currentUrl = this.router.url;
    return this.superadminaddingmeal.some((r) => currentUrl.startsWith(r));
  }
}
