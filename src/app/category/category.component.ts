import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { AuthService } from '../service/auth.service';  

@Component({
  selector: 'app-category',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']   
})
export class CategoryComponent implements OnInit {
  regionalCuisines: any[] = [];
  cuisines: any[] = [];

  cuisineOptions: string[] = [
    'North Indian',
    'South Indian',
    'Punjabi',
    'Gujarati',
    'Rajasthani',
    'Maharashtrian',
    'Bengali',
    'Kashmiri'
  ];

  constructor(public api: AuthService) {}

  ngOnInit(): void {
    this.getByCategory('Regional');
  }

  getByCategory(category: string): void {
    this.api.getmealbycaterogy(category).subscribe((res: any) => { 
      this.cuisines = res;
      console.log(this.cuisines);
    });
  }

  filterCuisine(option: string): void {
    console.log('Selected Cuisine:', option);
    // Optional: call API or filter logic here
  }

  // ===== Add to Cart functionality using localStorage =====
  addToCart(meal: any) {
    let cart = JSON.parse(localStorage.getItem('cart') || '[]');

    // Use meal.name as unique key if id is missing
    const existing = cart.find((item: any) => item.name === meal.name);

    if (existing) {
      existing.quantity++;
    } else {
      cart.push({
        id: meal.id || meal.name,
        name: meal.name,
        description: meal.description,
        price: meal.price,
        quantity: 1,
        image: meal.imageUrl
      });
    }

    localStorage.setItem('cart', JSON.stringify(cart));
    alert(`${meal.name} added to cart!`);
  }
}
