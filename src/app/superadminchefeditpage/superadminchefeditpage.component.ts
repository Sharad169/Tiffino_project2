import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Sidebar2Component } from '../sidebar2/sidebar2.component';
@Component({
  selector: 'app-superadminchefeditpage',
  standalone: true,
  imports: [Sidebar2Component],
  templateUrl: './superadminchefeditpage.component.html',
  styleUrls: ['./superadminchefeditpage.component.css'],
})
export class SuperadminchefeditpageComponent {
  constructor(private router: Router) {}

  onRoleChangeCustom(role: string) {
    if (role === 'manager') {
      this.router.navigate(['/superadminmanagereditpage']);
    } else if (role === 'chef') {
      this.router.navigate(['/superadminchefeditpage']);
    } else if (role === 'delivery-partner') {
      this.router.navigate(['/superadmindelpartnereditpage']);
    }
  }
}
