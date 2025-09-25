import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  userName: string | null = null;

  ngOnInit(): void {
    this.userName = sessionStorage.getItem('name');

    // Optional: Log it to the console to verify
    if (this.userName) {
      console.log('User name:', this.userName);
    }
  }
}
