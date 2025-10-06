import { CommonModule } from '@angular/common';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
<<<<<<< HEAD
import { FormsModule } from '@angular/forms';
=======
>>>>>>> f937839ae328cf3c3e378bb3e0433a48b53dd6d1
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-cuisine-detail',
  standalone: true,
<<<<<<< HEAD
  imports: [CommonModule, FormsModule],
=======
  imports: [CommonModule],
>>>>>>> f937839ae328cf3c3e378bb3e0433a48b53dd6d1
  templateUrl: './cuisine-detail.component.html',
  styleUrl: './cuisine-detail.component.css'
})
export class CuisineDetailComponent implements OnInit {
  cuisineId!: number;
  meals: any[] = [];
  cuisineName: string = '';
<<<<<<< HEAD
  
=======
>>>>>>> f937839ae328cf3c3e378bb3e0433a48b53dd6d1

 constructor(
    private route: ActivatedRoute,    private http: HttpClient  ) {}

<<<<<<< HEAD
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

=======

  ngOnInit(): void {
    this.cuisineId = Number(this.route.snapshot.paramMap.get('id'));

    const token = sessionStorage.getItem('token');
    const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);

    // API call to get meals of this cuisine
   this.http.get<any[]>(`http://localhost:8082/api/meals/cuisine/${this.cuisineId}`, { headers })
  .subscribe(data => {
    this.meals = data;
    console.log(this.meals);
    
    
        if (data.length > 0) this.cuisineName = data[0].cuisineName || 'Cuisine';
      });
  }
>>>>>>> f937839ae328cf3c3e378bb3e0433a48b53dd6d1


}
