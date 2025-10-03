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

  cuisineData:any =[];

categories: string[] = ['Regional', 'International', 'Special'];
  constructor(public api : AuthService) { }



  ngOnInit(): void {
   this.categories.forEach(category => {
      this.getByCategory(category);
    });
  }


  getByCategory(category: string){
    this.api.getmealbycaterogy(category).subscribe((res)=>{
      this.cuisineData=res;
      console.log(this.cuisineData);
      
    });
  }

}
