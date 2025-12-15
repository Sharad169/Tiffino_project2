import { Component } from '@angular/core';
import { SuperadminSidebarComponent } from '../superadmin-sidebar/superadmin-sidebar.component';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-manager-registration',
  standalone: true,
  imports: [SuperadminSidebarComponent, CommonModule],
  templateUrl: './manager-registration.component.html',
  styleUrls: ['./manager-registration.component.css'],
})
export class ManagerRegistrationComponent {
  constructor(private router: Router) {}

  navigateTo(route: string) {
    this.router.navigate([route]);
  }
}
