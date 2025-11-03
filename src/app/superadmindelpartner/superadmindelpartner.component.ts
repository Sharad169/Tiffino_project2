import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Sidebar2Component } from '../sidebar2/sidebar2.component';

@Component({
  selector: 'app-superadmindelpartner',
  standalone: true,
  imports: [Sidebar2Component],
  templateUrl: './superadmindelpartner.component.html',
  styleUrls: ['./superadmindelpartner.component.css'],
})
export class SuperadmindelpartnerComponent {
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
