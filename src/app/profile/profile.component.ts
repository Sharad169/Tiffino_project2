import { Component, OnInit } from '@angular/core';
import { UserService } from '../service/user.service';
import { ActivatedRoute } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-profile',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css'],
})
//export class ProfileComponent {}
export class ProfileComponent implements OnInit {
  userEmail: string = 'aditya@gmail.com';
    userData: any;
    selectedTabName : string = "Account Settings";
   sideBarItems = ['Account Settings','Order History','Payment Method','Addresses','Help Center','Promocodes & Offers','Meal Plan Subscription','Invite Friends','Privacy','Logout','Delete Account'];


  constructor(private userService: UserService, private route: ActivatedRoute) {}

   ngOnInit(): void {
     // For testing purpose only, remove this line in production
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.getUserDetails(+id);
    }
  }

  getUserDetails(id: number) {
    this.userService.getUserById(id).subscribe({
      next: (data) => {
        console.log('User data:', data);
        this.userData = data;
        sessionStorage.setItem('userName', this.userData.name);
      },
      error: (err) => {
        console.error('Error fetching user:', err);
      }
    });
  }


  bindFiled(){
    this.userData = {
  name: this.userData.name,
  email: this.userData.email,
  phone: this.userData.phone,
  dateOfBirth: this.userData.dateOfBirth
};
  }

  selectTab(tabName: string) {
    console.log('Selected Tab:', tabName);
    this.selectedTabName = tabName;
    
  }




}
