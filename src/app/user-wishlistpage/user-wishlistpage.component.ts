import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthService } from '../service/auth.service';

@Component({
  selector: 'app-user-wishlistpage',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './user-wishlistpage.component.html',
  styleUrl: './user-wishlistpage.component.css',
})
export class UserWishlistpageComponent implements OnInit {
  wishlist: any[] = [];
  userId!: number;

  constructor(private authService: AuthService, public api: AuthService) {}

  ngOnInit(): void {
    const storedUserId = sessionStorage.getItem('userId');

    if (storedUserId) {
      this.userId = Number(storedUserId);
      this.loadWishlist();
    } else {
      console.error('User not logged in');
    }
  }

  loadWishlist(): void {
    this.authService.viewWishlist(this.userId).subscribe({
      next: (res) => {
        this.wishlist = res;
      },
      error: (err) => {
        console.error('Error loading wishlist', err);
      },
    });
  }

  removeFromWishlist(mealId: number): void {
    this.wishlist = this.wishlist.filter(
      (item) => Number(item.mealId) !== Number(mealId)
    );

    this.authService.removeFromWishlist(this.userId, mealId).subscribe({
      error: () => {
        // rollback if backend fails
        this.loadWishlist();
      },
    });
  }
  addToCart(meal: any): void {
    if (meal.adding) return; // ⛔ prevent double click

    meal.adding = true; // 🔒 lock button
    const mealId = meal.mealId ?? meal.id; // SAFE
    const quantity = 1;

    if (!mealId) {
      alert('Invalid meal');
      meal.adding = false;
      return;
    }

    this.api.addToCart(this.userId, mealId, quantity).subscribe({
      next: (res) => {
        alert('Meal added successfully ✅');
        // optional navigation
        // this.router.navigate(['/add-cart']);
      },
      error: (err) => {
        console.error('Add to cart error', err);
        alert('Failed to add meal');
        meal.adding = false; // 🔓 unlock on error
      },
      complete: () => {
        // optional delay for UX smoothness
        setTimeout(() => {
          meal.adding = false; // 🔓 unlock
        }, 500);
      },
    });
  }
  rateMeal(item: any, rating: number): void {
    item.rating = rating; // UI update

    console.log(`Rated meal ${item.mealId} with ${rating} stars`);

    // OPTIONAL: send to backend
    // this.api.rateMeal(this.userId, item.mealId, rating).subscribe();
  }
}
