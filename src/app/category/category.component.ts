import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../service/auth.service';  

@Component({
  selector: 'app-category',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']   
})
export class CategoryComponent implements OnInit {
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

  constructor(public api: AuthService, private router: Router) {}

  ngOnInit(): void {
    this.getByCategory('category');
  }

  getByCategory(category: string): void {
    this.api.getmealbycaterogy(category).subscribe((res: any) => { 
      this.cuisines = res;
      console.log(this.cuisines);
    });
  }

  filterCuisine(option: string): void {
    console.log('Selected Cuisine:', option);
  }

  addToCart(meal: any): void {
    let cart = JSON.parse(localStorage.getItem('cart') || '[]');
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

  /** ✅ Scrolls the meal row smoothly to the right */
  scrollRight(id: string): void {
    const el = document.getElementById(id);
    if (el) el.scrollBy({ left: 330, behavior: 'smooth' });
  }

  /** ✅ Navigates to cuisine detail page */
  goToCuisineDetail(mealId: any): void {
    this.router.navigate(['/cuisine-detail', mealId || 1]);
  }

  toggleLike(meal: any) {
  meal.liked = !meal.liked;
}

}
