import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Sidebar2Component } from '../sidebar2/sidebar2.component';

@Component({
  selector: 'app-superadminchef',
  standalone: true,
  imports: [Sidebar2Component],
  templateUrl: './superadminchef.component.html',
  styleUrls: ['./superadminchef.component.css'],
})
export class SuperadminchefComponent {
  constructor(private router: Router) {}

  onRoleChangeCustom(role: string) {
    if (role === 'manager') {
      this.router.navigate(['/managerinfo']);
    } else if (role === 'chef') {
      this.router.navigate(['/superadminchef']);
    } else if (role === 'delivery-partner') {
      this.router.navigate(['/superadmindelpartner']);
    }
  }
}
