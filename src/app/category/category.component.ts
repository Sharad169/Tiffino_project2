import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { AuthService } from '../service/auth.service';

@Component({
  selector: 'app-category',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './category.component.html',
  styleUrl: './category.component.css'
})
export class CategoryComponent implements OnInit {

  regionalCuisines:any =[];


  constructor(public api : AuthService) { }



  ngOnInit(): void {
    this.getByCategory('Regional');
   
  }


  getByCategory(category: string){
    // debugger
    this.api.getmealbycaterogy(category).subscribe((res)=>{
      this.regionalCuisines=res;
      console.log(this.regionalCuisines);
      
    });
  }

}

// cuisineData: any;
// ngOnInit() {
//   this.authService.getMealsByCuisine(6).subscribe({
//     next: (res) => {
//       this.cuisineData = res;   // contains CuisinName + meals    },
//     error: (err) => console.error(err)
//   });
// }


