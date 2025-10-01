import { CommonModule } from '@angular/common';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-cuisine-detail',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './cuisine-detail.component.html',
  styleUrl: './cuisine-detail.component.css'
})
export class CuisineDetailComponent implements OnInit {
  cuisineId!: number;
  meals: any[] = [];
  cuisineName: string = '';

 constructor(
    private route: ActivatedRoute,    private http: HttpClient  ) {}


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


}
