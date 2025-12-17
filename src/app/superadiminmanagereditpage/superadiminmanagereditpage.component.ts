import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { SuperadminSidebarComponent } from '../superadmin-sidebar/superadmin-sidebar.component';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-superadiminmanagereditpage',
  standalone: true,
  imports: [SuperadminSidebarComponent, CommonModule],
  templateUrl: './superadiminmanagereditpage.component.html',
  styleUrls: ['./superadiminmanagereditpage.component.css'],
})
export class SuperadiminmanagereditpageComponent {
  constructor(private router: Router) {}

  navigateTo(route: string) {
    this.router.navigate([route]);
  }
}
