import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChefSidebarComponent } from '../chef-sidebar/chef-sidebar.component';
import { ChefSubscriptionordersComponent } from '../chef-subscriptionorders/chef-subscriptionorders.component';

@Component({
  selector: 'app-chef-subscriptioneditdetails',
  standalone: true,
  imports: [
    CommonModule,
    ChefSidebarComponent,
    ChefSubscriptionordersComponent,
  ],
  templateUrl: './chef-subscriptioneditdetails.component.html',
  styleUrls: ['./chef-subscriptioneditdetails.component.css'],
})
export class ChefSubscriptioneditdetailsComponent {
  showOrdersPage = false; // <-- IMPORTANT

  selectedType = 'subscriber';

  orders = [
    {
      deliveryNo: 1,
      date: 'dd/mm/yyyy',
      diet: 'Veg',
      portion: 'Small',
      spice: 'Extra Spicy',
      allergens: 'Egg',
      health: 'Low Carb,High Fiber',
    },
    {
      deliveryNo: 2,
      date: 'dd/mm/yyyy',
      diet: 'Veg',
      portion: 'Small',
      spice: 'Extra Spicy',
      allergens: 'Egg',
      health: 'Low Carb,High Fiber',
    },
    {
      deliveryNo: 3,
      date: 'dd/mm/yyyy',
      diet: 'Veg',
      portion: 'Small',
      spice: 'Extra Spicy',
      allergens: 'Egg',
      health: 'Low Carb,High Fiber',
    },
    {
      deliveryNo: 4,
      date: 'dd/mm/yyyy',
      diet: 'Veg',
      portion: 'Small',
      spice: 'Extra Spicy',
      allergens: 'Egg',
      health: 'Low Carb,High Fiber',
    },
  ];

  selectType(type: string) {
    this.selectedType = type;
  }

  openOrdersPage() {
    this.showOrdersPage = true;
  }

  goBack() {
    this.showOrdersPage = false;
  }
}
