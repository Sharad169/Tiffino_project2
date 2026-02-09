import { Component } from '@angular/core';
import { ChefSidebarComponent } from '../chef-sidebar/chef-sidebar.component';

@Component({
  selector: 'app-chef-subscriptionorders',
  standalone: true,
  imports: [ChefSidebarComponent],
  templateUrl: './chef-subscriptionorders.component.html',
  styleUrls: ['./chef-subscriptionorders.component.css'],
})
export class ChefSubscriptionordersComponent {}
