
import { Component } from '@angular/core';
import { RouterModule, Router } from '@angular/router';
import { Location, CommonModule } from '@angular/common';

@Component({
  selector: 'app-superadmin-sidebar',
  standalone: true,
  imports: [],
  templateUrl: './superadmin-sidebar.component.html',
  styleUrl: './superadmin-sidebar.component.css'
})
 

export class SuperadminSidebarComponent {
  // ✅ Registration Form group
  registrationRoutes = [
    '/managerregi',
    '/superadminchef',
    '/superadmindelpartner',
    '/managerinfo',
  ];
 
  cloudKitchenRoutes = [
    '/cloud-kitchen-registration',
    '/superadmincloudkitchen',
  ];
 
  // ✅ List of Kitchen group
  kitchenRoutes = ['/superadminkitchen', '/superadminkitchendetails'];
 
  // ✅ List of Employee group
  employeeRoutes = [
    '/listemployee',
    '/superadminmanagerdetails',
    '/superadminchefdetails',
    '/superadmindelpartnerdetails',
  ];
 
  // ✅ Edit Employee route
  editEmployeeRoutes = [
    '/superadmineditlist',
    '/superadminmanagereditpage',
    '/superadminchefeditpage',
    '/superadmindelpartnereditpage',
  ];
  subscriberListRoutes = ['/superadminsubscriberlist'];
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
}
 
 
