import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Sidebar2Component } from '../sidebar2/sidebar2.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-managerinfo',
  standalone: true,
  imports: [Sidebar2Component, CommonModule],
  templateUrl: './managerinfo.component.html',
  styleUrls: ['./managerinfo.component.css'],
})
export class ManagerinfoComponent {
  constructor(private router: Router) {}

  navigateTo(route: string) {
    this.router.navigate([route]);
  }
}
