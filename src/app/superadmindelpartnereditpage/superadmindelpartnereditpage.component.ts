import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Sidebar2Component } from '../sidebar2/sidebar2.component';
@Component({
  selector: 'app-superadmindelpartnereditpage',
  standalone: true,
  imports: [Sidebar2Component],
  templateUrl: './superadmindelpartnereditpage.component.html',
  styleUrls: ['./superadmindelpartnereditpage.component.css'],
})
export class SuperadmindelpartnereditpageComponent {
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
