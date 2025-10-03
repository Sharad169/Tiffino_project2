/*import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profile',
  standalone: true,
  imports: [],
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css'],
})
//export class ProfileComponent {}
export class ProfileComponent implements OnInit {
  userEmail: string = 'aditya@gmail.com';

  ngOnInit(): void {}
}*/

// src/app/profile/profile.component.ts
import { Component } from '@angular/core';

@Component({
  selector: 'app-profile',
  standalone: true,
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css'],
})
export class ProfileComponent {
  userName = 'Aditya Dhanraj';
  userEmail = 'aditya@gmail.com';
  city = 'Pune, Maharashtra';
}
