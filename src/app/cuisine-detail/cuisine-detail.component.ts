// import { CommonModule } from '@angular/common';
// import { HttpClient, HttpHeaders } from '@angular/common/http';
// import { Component, OnInit } from '@angular/core';
// import { FormsModule } from '@angular/forms';
// import { ActivatedRoute } from '@angular/router';

// @Component({
//   selector: 'app-cuisine-detail',
//   standalone: true,
//   imports: [CommonModule, FormsModule],
//   templateUrl: './cuisine-detail.component.html',
//   styleUrl: './cuisine-detail.component.css',
// })
// export class CuisineDetailComponent implements OnInit {
//   cuisineId!: number;
//   meals: any[] = [];
//   cuisineName: string = '';

//   constructor(private route: ActivatedRoute, private http: HttpClient) {}

//   ngOnInit(): void {
//     this.cuisineId = Number(this.route.snapshot.paramMap.get('id'));

//     const token = sessionStorage.getItem('token');
//     const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);

//     this.http
//       .get<any>(`http://localhost:8082/api/meals/cuisine/${this.cuisineId}`, {
//         headers,
//       })
//       .subscribe(
//         (data) => {
//           console.log('Fetched meals data:', data);

// अगर API object return करता है जिसमें meals array है
// if (data && data.meals) {
//   this.meals = Array.isArray(data.meals) ? data.meals : [data.meals]; // ensure array
//   this.cuisineName = data.cuisineName || 'Cuisine';
// } else if (Array.isArray(data)) {
// अगर API सीधे array return करता है
//   this.meals = data;

//   this.cuisineName =
//     data.length > 0 ? data[0].cuisineName || 'Cuisine' : 'Cuisine';
// } else {
// fallback
//     this.meals = [];
//     this.cuisineName = 'Cuisine';
//   }
// },
//         (error) => {
//           console.error('Error fetching meals:', error);
//           this.meals = [];
//           this.cuisineName = 'Cuisine';
//         }
//       );
//   }
// }

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
  styleUrls: ['./cuisine-detail.component.css'], // ✅ Correct plural
})
export class CuisineDetailComponent implements OnInit {
  cuisineId!: number;
 
  cuisineName: string = '';
<<<<<<< HEAD

  constructor(private route: ActivatedRoute, private http: HttpClient) {}
=======

  
  userId: number = Number(sessionStorage.getItem('userId')); 
  meals: any[] = [];
  

 constructor(
    private route: ActivatedRoute, public api : AuthService,    private http: HttpClient , public router : Router ) {}
>>>>>>> origin/feature/login-page

  ngOnInit(): void {
    this.cuisineId = Number(this.route.snapshot.paramMap.get('id'));

<<<<<<< HEAD
    const token = sessionStorage.getItem('token');
    const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);
=======
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






>>>>>>> origin/feature/login-page

    // 🔹 Try fetching meals from API
    this.http
      .get<any>(`http://localhost:8082/api/meals/cuisine/${this.cuisineId}`, {
        headers,
      })
      .subscribe(
        (data) => {
          console.log('Fetched meals data:', data);

          if (data && data.meals) {
            // API returns object containing meals array
            this.meals = Array.isArray(data.meals) ? data.meals : [data.meals];
            this.cuisineName = data.cuisineName || 'Cuisine';
          } else if (Array.isArray(data)) {
            // API returns direct array
            this.meals = data;
            this.cuisineName =
              data.length > 0 ? data[0].cuisineName || 'Cuisine' : 'Cuisine';
          } else {
            // fallback if data is empty
            this.loadStaticMeals();
          }
        },
        (error) => {
          console.error('Error fetching meals:', error);
          // 🔹 Load static fallback cards if API fails
          this.loadStaticMeals();
        }
      );
  }

  // 🔹 Fallback 15 South Indian cards
  loadStaticMeals(): void {
    this.cuisineName = 'Cuisine';
    this.meals = [
      {
        name: 'Sambar with Rice',
        description:
          'Tangy lentil stew with tamarind and vegetables, served with rice.',
        price: 500,
        imageUrl: '/assets/sambar.png',
      },
      {
        name: 'Curd Rice',
        description: 'Cool, creamy yogurt rice with tempered spices.',
        price: 500,
        imageUrl: '/assets/curd.png',
      },
      {
        name: 'Rasam with Rice',
        description: 'Spicy-sour tamarind soup paired with steamed rice.',
        price: 500,
        imageUrl: '/assets/rasam.png',
      },
      {
        name: 'Malabar Fish Curry',
        description: 'Fish simmered in coconut milk and spicy Kerala masala.',
        price: 500,
        imageUrl: '/assets/malabar.png',
      },
      {
        name: 'Kothu Parotta',
        description:
          'Shredded parotta stir-fried with egg/veg/chicken and masalas.',
        price: 500,
        imageUrl: '/assets/kothu.png',
      },
      {
        name: 'Chettinad Chicken Curry',
        description: 'Fiery chicken curry with Chettinad spices.',
        price: 500,
        imageUrl: '/assets/chettinad.png',
      },
      {
        name: 'Appam with Stew',
        description:
          'Soft appam with coconut-based stew for perfect breakfast.',
        price: 500,
        imageUrl: '/assets/Appam.png',
      },
      {
        name: 'Kerala Parotta with Beef Fry',
        description: 'Flaky parottas paired with spicy beef fry.',
        price: 500,
        imageUrl: '/assets/kerala.png',
      },
      {
        name: 'Avial',
        description: 'Mixed vegetables cooked in coconut-yogurt gravy.',
        price: 500,
        imageUrl: '/assets/avial.png',
      },
      {
        name: 'Gongura Mutton Curry',
        description: 'Tangy mutton curry with gongura (sorrel leaves).',
        price: 500,
        imageUrl: '/assets/gongura.png',
      },
      {
        name: 'Andhra Chicken Curry',
        description: 'Spicy chicken curry with signature Andhra chili punch.',
        price: 500,
        imageUrl: '/assets/andhra.png',
      },
      {
        name: 'Pesarattu with Upma',
        description: 'Green gram dosa stuffed with upma.',
        price: 500,
        imageUrl: '/assets/pesarattu.png',
      },
      {
        name: 'Biryani',
        description: 'Aromatic rice layered with marinated chicken or mutton.',
        price: 500,
        imageUrl: '/assets/biriyani.png',
      },
      {
        name: 'Haleem',
        description: 'Slow-cooked wheat, lentils, and meat porridge.',
        price: 500,
        imageUrl: '/assets/haleem.png',
      },
      {
        name: 'Sajja Roti with Curry',
        description: 'Millet roti paired with spicy meat or veg curry.',
        price: 500,
        imageUrl: '/assets/sajja.png',
      },
    ];
  }
}
