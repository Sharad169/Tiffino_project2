import { CommonModule } from '@angular/common';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from '../service/auth.service';
 
@Component({
  selector: 'app-cuisine-detail',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './cuisine-detail.component.html',
  styleUrls: ['./cuisine-detail.component.css'],
})
export class CuisineDetailComponent implements OnInit {
  cuisineId!: number;
  cuisineName: string = '';
  meals: any[] = [];
  userId!: number;
 
  constructor(
    private route: ActivatedRoute,
    public api: AuthService,
    private http: HttpClient,
    private router: Router
  ) {}
 
  ngOnInit(): void {
    // ================= USER ID =================
    const userIdStr = sessionStorage.getItem('userId');
    if (!userIdStr) {
      alert('User not logged in');
      return;
    }
    this.userId = Number(userIdStr);
 
    // ================= CUISINE ID =================
    this.cuisineId = Number(this.route.snapshot.paramMap.get('id'));
 
    const token = sessionStorage.getItem('token');
    const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);
 
    // ================= LOAD MEALS =================
    this.http
      .get<any>(`http://localhost:8082/api/meals/cuisine/${this.cuisineId}`, {
        headers,
      })
      .subscribe({
        next: (data) => {
          if (data?.meals) {
            this.meals = Array.isArray(data.meals) ? data.meals : [data.meals];
            this.cuisineName = data.cuisineName || 'Cuisine';
          } else if (Array.isArray(data)) {
            this.meals = data;
            this.cuisineName =
              data.length > 0 ? data[0].cuisineName : 'Cuisine';
          } else {
            this.meals = [];
            this.cuisineName = 'Cuisine';
          }
        },
        error: (err) => {
          console.error('Error loading meals', err);
        },
      });
  }
 
  // ================= ADD TO CART (BACKEND) =================
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
}
 
 