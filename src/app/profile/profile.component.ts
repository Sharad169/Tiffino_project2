import { Component, OnInit } from '@angular/core';
import { UserService } from '../service/user.service';
import { ActivatedRoute } from '@angular/router';

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
    userData: any;

  constructor(private userService: UserService, private route: ActivatedRoute) {}

   ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id'); // URL से id लेना
    if (id) {
      this.getUserDetails(+id);
    }
  }

  getUserDetails(id: number) {
    this.userService.getUserById(id).subscribe({
      next: (data) => {
        console.log('✅ User data:', data);
        this.userData = data;
      },
      error: (err) => {
        console.error('❌ Error fetching user:', err);
      }
    });
  }


}
