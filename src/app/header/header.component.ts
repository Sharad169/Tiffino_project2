import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  userName: string | null = null;
   userId!: number;
   name: string | null = sessionStorage.getItem('userName');

  constructor(private router: Router) {}  

  ngOnInit(): void {
     const id = sessionStorage.getItem('userId');
    const name = sessionStorage.getItem('userName');

    if (id) this.userId = +id;       // string → number
    if (name) this.userName = name;
  }

  goToProfile() {
    if (this.userId) {
      this.router.navigate(['/profile', this.userId]);
    } else {
      console.warn('⚠️ User ID not found in sessionStorage!');
    }
  }
  


}
