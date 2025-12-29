import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from '../service/auth.service';

@Component({
  selector: 'app-category',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css'],
})
export class CategoryComponent implements OnInit {
  cuisines: any[] = [];
  userId!: number;
  wishlistIds = new Set<number>();

  constructor(
    public api: AuthService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    const userIdStr = sessionStorage.getItem('userId');
    if (!userIdStr) {
      alert('User not logged in');

      return;
    }
    this.userId = Number(userIdStr);

    this.route.paramMap.subscribe((params) => {
      const category = params.get('category');

      if (category) {
        console.log(category);
        this.getByCategory(category);
      }
    });
  }

  getByCategory(category: string): void {
    this.api.getmealbycaterogy(category).subscribe({
      next: (res: any) => {
        // ✅ normalize response
        if (Array.isArray(res)) {
          this.cuisines = res;
        } else if (res?.meals) {
          this.cuisines = Array.isArray(res.meals) ? res.meals : [res.meals];
        } else {
          this.cuisines = [];
        }

        // 🔥 MUST be here
        this.markWishlistMeals();
      },
      error: (err) => {
        console.error('Error loading category meals', err);
      },
    });
  }

  filterCuisine(option: string): void {
    console.log('Selected Cuisine:', option);
  }

  addToCart(meal: any): void {
    if (meal.adding) return; // ⛔ double click guard
    meal.adding = true; // 🔒 lock button

    // const userId = Number(userIdStr);
    const mealId = meal.mealId ?? meal.id;
    const quantity = 1;

    if (!mealId) {
      alert('Invalid meal');
      meal.adding = false;
      return;
    }

    this.api.addToCart(this.userId, mealId, quantity).subscribe({
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
      },
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
  // ================= WISHLIST TOGGLE =================
  toggleLike(meal: any): void {
    const mealId = Number(meal.mealId ?? meal.id);
    if (!mealId) return;

    // ⛔ prevent double clicks
    if (meal.wishlistProcessing) return;
    meal.wishlistProcessing = true;

    // ================= ADD =================
    if (!meal.liked) {
      meal.liked = true;
      this.wishlistIds.add(mealId);

      this.api.addToWishlist(this.userId, mealId).subscribe({
        next: () => {
          meal.wishlistProcessing = false;
        },
        error: (err) => {
          // 🔥 IGNORE "already in wishlist"
          if (err?.status === 400) {
            meal.wishlistProcessing = false;
            return;
          }

          // rollback only for real errors
          meal.liked = false;
          this.wishlistIds.delete(mealId);
          meal.wishlistProcessing = false;
        },
      });
    }

    // ================= REMOVE =================
    else {
      meal.liked = false;
      this.wishlistIds.delete(mealId);

      this.api.removeFromWishlist(this.userId, mealId).subscribe({
        next: () => {
          meal.wishlistProcessing = false;
        },
        error: () => {
          // rollback
          meal.liked = true;
          this.wishlistIds.add(mealId);
          meal.wishlistProcessing = false;
        },
      });
    }
  }

  // ================= SYNC HEART STATE =================
  markWishlistMeals(): void {
    this.api.viewWishlist(this.userId).subscribe({
      next: (wishlist) => {
        this.wishlistIds.clear();

        wishlist.forEach((item: any) => {
          this.wishlistIds.add(Number(item.mealId));
        });

        this.cuisines.forEach((meal) => {
          const mealId = Number(meal.mealId ?? meal.id);
          meal.liked = this.wishlistIds.has(mealId);
        });
      },
    });
  }
}
