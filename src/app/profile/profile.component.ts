import { Component, OnInit } from '@angular/core';

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
}
