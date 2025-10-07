import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from '../header/header.component';
import { FooterComponent } from '../footer/footer.component';
import { AuthService } from '../service/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, HeaderComponent, FooterComponent],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit  {

  cuisines: any[] = [];
   regionalCuisines: any[] = [];
  internationalCuisines: any[] = [];
  specialCuisines: any[] = [];

constructor(public api :AuthService, public router : Router) { }



  ngOnInit(): void {
    this.getData()
  }


  // getData(){
  //   this.api.homeData().subscribe((res)=>{
  //     console.log(res);
  //     this.cuisines = res as any[]; 
  //   })
  // }

   getData() {
    this.api.homeData().subscribe((res) => {
      console.log(res);
      this.cuisines = res as any[];

      // category wise filter
      this.regionalCuisines = this.cuisines.filter(c => c.category === 'Regional');
      this.internationalCuisines = this.cuisines.filter(c => c.category === 'International');
      this.specialCuisines = this.cuisines.filter(c => c.category === 'Special');
    });
  }

 goToCuisine(id: number) {
  this.router.navigate(['/cuisine-detail', id]); // cuisineId pass karenge
}

goToCategoryPage(category: string) {
  this.router.navigate(['/category', category]); // cuisineId pass karenge  
}

}
