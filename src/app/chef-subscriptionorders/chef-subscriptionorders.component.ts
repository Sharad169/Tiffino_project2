import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChefSidebarComponent } from '../chef-sidebar/chef-sidebar.component';

@Component({
  selector: 'app-chef-subscriptionorders',
  standalone: true,
  imports: [
    CommonModule,
    ChefSidebarComponent
  ],
  templateUrl: './chef-subscriptionorders.component.html',
  styleUrls: ['./chef-subscriptionorders.component.css'],
})
export class ChefSubscriptionordersComponent {}
