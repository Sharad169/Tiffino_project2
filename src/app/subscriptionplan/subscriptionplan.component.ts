import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { SidebarComponent } from '../sidebar/sidebar.component';

@Component({
  selector: 'app-subsplan',
  standalone: true,
  imports: [CommonModule, RouterModule, SidebarComponent],
  templateUrl: './subscriptionplan.component.html',
  styleUrls: ['./subscriptionplan.component.css'],
})
export class SubscriptionplanComponent {
  isPaused: boolean = false; // initially false = plan is active (Pause button visible)

  togglePlan(): void {
    this.isPaused = !this.isPaused; // toggle between true/false
  }
}
