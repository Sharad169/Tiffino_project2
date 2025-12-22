import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
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
 
  constructor(public api: AuthService, private router: Router, private route: ActivatedRoute) {}
 
  ngOnInit(): void {
 
      this.route.paramMap.subscribe(params => {
    const category = params.get('category');
 
    if (category) {
      console.log(category);
      this.getByCategory(category);
    }
  });
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
  if (meal.adding) return; // ⛔ double click guard
  meal.adding = true;      // 🔒 lock button
 
  const userIdStr = sessionStorage.getItem('userId');
  if (!userIdStr) {
    alert('User not logged in');
    meal.adding = false;
    return;
  }
 
  const userId = Number(userIdStr);
  const mealId = meal.mealId ?? meal.id;
  const quantity = 1;
 
  if (!mealId) {
    alert('Invalid meal');
    meal.adding = false;
    return;
  }
 
  this.api.addToCart(userId, mealId, quantity).subscribe({
    next: () => {
      alert('Meal added successfully ✅');
    },
    error: (err) => {
      console.error('Add to cart error', err);
      alert('Failed to add meal');
      meal.adding = false; // 🔓 unlock on error
    },
    complete: () => {
      setTimeout(() => {
        meal.adding = false; // 🔓 unlock
      }, 500);
    }
  });
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
 
 