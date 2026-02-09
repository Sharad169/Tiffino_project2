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

  constructor(
    private route: ActivatedRoute,
    public api: AuthService,
    private http: HttpClient,
    public router: Router
  ) {}

  ngOnInit(): void {
    this.cuisineId = Number(this.route.snapshot.paramMap.get('id'));

    const token = sessionStorage.getItem('token');
    const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);

    this.http
      .get<any>(`http://localhost:8082/api/meals/cuisine/${this.cuisineId}`, {
        headers,
      })
      .subscribe({
        next: (data) => {
          console.log('Fetched meals data:', data);

          if (data && data.meals) {
            this.meals = Array.isArray(data.meals) ? data.meals : [data.meals];
            this.cuisineName = data.CuisineName || 'Cuisine';
          } else if (Array.isArray(data)) {
            this.meals = data;
            this.cuisineName =
              data.length > 0 ? data[0].cuisineName || 'Cuisine' : 'Cuisine';
          } else {
            this.meals = [];
            this.cuisineName = 'Cuisine';
          }
        },
        error: (error) => {
          console.error('Error fetching meals:', error);
          this.meals = [];
          this.cuisineName = 'Cuisine';
        },
      });
  }

  addToCart(meal: any) {
    console.log('Adding to cart:', meal);

    // Get current cart
    let cart = JSON.parse(localStorage.getItem('cart') || '[]');

    // Check if this meal already exists in the cart
    const existing = cart.find((item: any) => item.name === meal.name);

    if (existing) {
      existing.quantity++;
    } else {
      cart.push({
        id: meal.mealId || meal.id || meal.name, // unique identifier
        name: meal.name,
        description: meal.description,
        price: meal.price,
        quantity: 1,
        image: meal.imageUrl,
      });
    }

    // Save back to localStorage
    localStorage.setItem('cart', JSON.stringify(cart));

    alert(`${meal.name} added to cart!`);
    this.router.navigate(['/add-card']);
  }
}
