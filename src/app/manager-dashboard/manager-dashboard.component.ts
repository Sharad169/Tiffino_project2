import { Component } from '@angular/core';
import { ManagerSidebarComponent } from '../manager-sidebar/manager-sidebar.component';

@Component({
  selector: 'app-manager-dashboard',
  standalone: true,
  imports: [ManagerSidebarComponent],  // ⬅ RouterOutlet remove करा
  templateUrl: './manager-dashboard.component.html',
  styleUrls: ['./manager-dashboard.component.css']
})
export class ManagerDashboardComponent { }
