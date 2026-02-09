import { Component } from '@angular/core';
import { Sidebar2Component } from '../sidebar2/sidebar2.component';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-managerregi',
  standalone: true,
  imports: [Sidebar2Component, CommonModule],
  templateUrl: './managerregi.component.html',
  styleUrls: ['./managerregi.component.css'],
})
export class ManagerregiComponent {
  constructor(private router: Router) {}

  navigateTo(route: string) {
    this.router.navigate([route]);
  }
}
