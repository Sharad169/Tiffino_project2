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
  styleUrl: './cuisine-detail.component.css'
})
export class CuisineDetailComponent implements OnInit {
  cuisineId!: number;
 
  cuisineName: string = '';

  
  userId: number = Number(sessionStorage.getItem('userId')); 
  meals: any[] = [];
  

 constructor(
    private route: ActivatedRoute, public api : AuthService,    private http: HttpClient , public router : Router ) {}

ngOnInit(): void {
  this.cuisineId = Number(this.route.snapshot.paramMap.get('id'));

  const token = sessionStorage.getItem('token');
  const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);

  this.http.get<any>(`http://localhost:8082/api/meals/cuisine/${this.cuisineId}`, { headers })
    .subscribe(data => {

      console.log('Fetched meals data:', data );
      
      // अगर API object return करता है जिसमें meals array है
      if (data && data.meals) {
        this.meals = Array.isArray(data.meals) ? data.meals : [data.meals]; // ensure array
        this.cuisineName = data.cuisineName || 'Cuisine';
      } else if (Array.isArray(data)) {
        // अगर API सीधे array return करता है
        this.meals = data;
        
        this.cuisineName = data.length > 0 ? data[0].cuisineName || 'Cuisine' : 'Cuisine';
      } else {
        // fallback
        this.meals = [];
        this.cuisineName = 'Cuisine';
      }
    }, error => {
      console.error('Error fetching meals:', error);
      this.meals = [];
      this.cuisineName = 'Cuisine';
    });
}

addToCart(meal: any) {
  console.log('Meal passed:', meal); // check karo kya aa raha hai

  const itemToAdd = {
    mealId: meal.mealId,
    price: meal.price,
    quantity: 1
  };
  console.log('Payload:', itemToAdd);

  this.api.addToCart(this.userId, itemToAdd).subscribe({
    next: (res) => {
      console.log('Item added:', res);
      this.router.navigate(['/meals']);
    },
    error: (err) => console.error('Error adding to cart:', err)
  });
}








}
