import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-description',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './description.component.html',
  styleUrls: ['./description.component.css']
})
export class DescriptionComponent {
  dish = {
    name: 'Paneer Butter Masala',
    description: `A rich, creamy curry made with paneer cubes simmered in a tomato-cashew gravy, 
                  flavored with butter and aromatic spices. Perfectly pairs with naan or jeera rice.`,
    imageUrl: '../assets/Chinese/Egg Fried Rice.png',
    rating: 4.8,
    totalReviews: 6
  };

  quantity = 1;

  reviews = [
    { name: 'Adity Dhanraj', text: 'Absolutely loved the food! Fresh ingredients, perfect flavors, and super quick delivery. Tiffino never disappoints!' },
    { name: 'Adity Dhanraj', text: 'Absolutely loved the food! Fresh ingredients, perfect flavors, and super quick delivery. Tiffino never disappoints!' },
    { name: 'Adity Dhanraj', text: 'Absolutely loved the food! Fresh ingredients, perfect flavors, and super quick delivery. Tiffino never disappoints!' },
    { name: 'Adity Dhanraj', text: 'Absolutely loved the food! Fresh ingredients, perfect flavors, and super quick delivery. Tiffino never disappoints!' },
    { name: 'Adity Dhanraj', text: 'Absolutely loved the food! Fresh ingredients, perfect flavors, and super quick delivery. Tiffino never disappoints!' },
    { name: 'Adity Dhanraj', text: 'Absolutely loved the food! Fresh ingredients, perfect flavors, and super quick delivery. Tiffino never disappoints!' }
  ];

  increaseQuantity() {
    this.quantity++;
  }

  decreaseQuantity() {
    if (this.quantity > 1) {
      this.quantity--;
    }
  }

  // ⭐ Percentage data for star ratings (static example)
  getStarPercentage(star: number): number {
    const percentages: { [key: number]: number } = {
      5: 90,
      4: 60,
      3: 40,
      2: 20,
      1: 10
    };
    return percentages[star] || 0;
  }
}
