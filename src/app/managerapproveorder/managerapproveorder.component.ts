import { Component } from '@angular/core';
import { RouterModule, Router } from '@angular/router';
import { ManagersidebarComponent } from '../managersidebar/managersidebar.component';

@Component({
  selector: 'app-managerapproveorder',
  standalone: true,
  imports: [ManagersidebarComponent, RouterModule],
  templateUrl: './managerapproveorder.component.html',
  styleUrls: ['./managerapproveorder.component.css'],
})
export class ManagerapproveorderComponent {
  // ✅ Constructor should be INSIDE the class
  constructor(private router: Router) {}

  // ✅ Function should also be inside the class
  openOrder() {
    this.router.navigate(['/managerstartordersubscriber']);
  }
}
