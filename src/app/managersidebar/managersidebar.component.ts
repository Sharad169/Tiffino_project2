import { Component } from '@angular/core';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-managersidebar',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './managersidebar.component.html',
  styleUrls: ['./managersidebar.component.css'],
})
export class ManagersidebarComponent {
  constructor(public router: Router) {}

  // --- ROUTE GROUPS FOR HIGHLIGHTING ---
  homeRoutes = ['/applyleavemanager']; // highlight Home
  currenttOrderRoutes = [
    '/managerapproveorder',
    '/managerstartordersubscriber',
    '/manager-orderdelpartnerdetails',
  ]; // highlight Your current order
  ordersDeliverRoutes = ['/managerorderdeliverbyyou'];
  helpCenterRoutes = ['/managerhelpsupportpage'];

  // Check active route
  isActive(paths: string[]): boolean {
    return paths.includes(this.router.url);
  }
  goBack() {
    history.back();
  }
}
