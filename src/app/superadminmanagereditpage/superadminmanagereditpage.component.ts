import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Sidebar2Component } from '../sidebar2/sidebar2.component';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-superadminmanagereditpage',
  standalone: true,
  imports: [Sidebar2Component, CommonModule],
  templateUrl: './superadminmanagereditpage.component.html',
  styleUrls: ['./superadminmanagereditpage.component.css'],
})
export class SuperadminmanagereditpageComponent {
  constructor(private router: Router) {}

  navigateTo(route: string) {
    this.router.navigate([route]);
  }
}
