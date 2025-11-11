import { Component } from '@angular/core';
import { Sidebar2Component } from '../sidebar2/sidebar2.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-superadminsubscriberlist',
  standalone: true,
  imports: [Sidebar2Component, CommonModule],
  templateUrl: './superadminsubscriberlist.component.html',
  styleUrls: ['./superadminsubscriberlist.component.css'],
})
export class SuperadminsubscriberlistComponent {
  isSubscriber: boolean = true; // Default view

  // Sample data
  subscriberItems = [
    {
      name: 'Akshay',
      mealType: 'Lunch, Dinner',
      diet: 'Veg',
      portion: 'Medium',
      spice: 'Medium',
      nutrition: 'Low Fat, High Protein',
      allergens: 'None',
    },
    {
      name: 'Akshay',
      mealType: 'Lunch, Dinner',
      diet: 'Veg',
      portion: 'Medium',
      spice: 'Medium',
      nutrition: 'Low Fat, High Protein',
      allergens: 'None',
    },
    {
      name: 'Akshay',
      mealType: 'Lunch, Dinner',
      diet: 'Veg',
      portion: 'Medium',
      spice: 'Medium',
      nutrition: 'Low Fat, High Protein',
      allergens: 'None',
    },
    {
      name: 'Akshay',
      mealType: 'Lunch, Dinner',
      diet: 'Veg',
      portion: 'Medium',
      spice: 'Medium',
      nutrition: 'Low Fat, High Protein',
      allergens: 'None',
    },
    {
      name: 'Akshay',
      mealType: 'Lunch, Dinner',
      diet: 'Veg',
      portion: 'Medium',
      spice: 'Medium',
      nutrition: 'Low Fat, High Protein',
      allergens: 'None',
    },
  ];

  nonSubscriberItems = [
    {
      name: 'Akshay',
      mealType: 'Lunch, Dinner',
      diet: 'Veg',
      portion: 'Medium',
      spice: 'Medium',
      nutrition: 'Low Fat, High Protein',
      allergens: 'None',
    },
    {
      name: 'Akshay',
      mealType: 'Lunch, Dinner',
      diet: 'Veg',
      portion: 'Medium',
      spice: 'Medium',
      nutrition: 'Low Fat, High Protein',
      allergens: 'None',
    },
    {
      name: 'Akshay',
      mealType: 'Lunch, Dinner',
      diet: 'Veg',
      portion: 'Medium',
      spice: 'Medium',
      nutrition: 'Low Fat, High Protein',
      allergens: 'None',
    },
    {
      name: 'Akshay',
      mealType: 'Lunch, Dinner',
      diet: 'Veg',
      portion: 'Medium',
      spice: 'Medium',
      nutrition: 'Low Fat, High Protein',
      allergens: 'None',
    },
    {
      name: 'Akshay',
      mealType: 'Lunch, Dinner',
      diet: 'Veg',
      portion: 'Medium',
      spice: 'Medium',
      nutrition: 'Low Fat, High Protein',
      allergens: 'None',
    },
  ];

  // Toggle functions
  showSubscriberList() {
    this.isSubscriber = true;
  }

  showNonSubscriberList() {
    this.isSubscriber = false;
  }
}
