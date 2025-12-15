import { Component } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
@Component({
  selector: 'app-chef-sidebar',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './chef-sidebar.component.html',
  styleUrls: ['./chef-sidebar.component.css'],
})
export class ChefSidebarComponent {
  constructor(public router: Router) {}

  homeRoutes = ['/chef-dashboard', '/chef-applyleave'];
  helpSupportRoutes = ['/chef-helpsupportpage'];
  yourDetailsRoutes = [
    '/chef-yourdetailspage',
    '/chef-yourdetailsrequestpage',
    '/chef-editdetailspage',
  ];
  orderDetailsRoutes = [
    '/chef-subscriptioneditdetails',
    '/chef-subscriptionorders',
  ];
  isActive(paths: string[]): boolean {
    return paths.includes(this.router.url);
  }
  goBack() {
    history.back();
  }
}