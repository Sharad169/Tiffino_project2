// import { Component } from '@angular/core';
// import { CommonModule } from '@angular/common';
// import { RouterModule } from '@angular/router'; // ✅ import this

// @Component({
//   selector: 'app-profile',
//   standalone: true,
//   imports: [CommonModule, RouterModule], // ✅ include here
//   templateUrl: './profile.component.html',
//   styleUrls: ['./profile.component.css'],
// })
// export class ProfileComponent {}

import { Component, OnInit, Inject, PLATFORM_ID } from '@angular/core';
import { UserService } from '../service/user.service';
import { ActivatedRoute } from '@angular/router';
import { CommonModule, isPlatformBrowser } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-profile',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterModule],
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css'],
})
export class ProfileComponent implements OnInit {
  userEmail: string = 'aditya@gmail.com';
  userData: any = {};
  selectedTabName: string = 'Account Settings';

  sideBarItems = [
    'Account Settings',
    'Order History',
    'Payment Method',
    'Addresses',
    'Help Center',
    'Promocodes & Offers',
    'Meal Plan Subscription',
    'Invite Friends',
    'Privacy',
    'Logout',
    'Delete Account',
  ];

  constructor(
    private userService: UserService,
    private route: ActivatedRoute,
    @Inject(PLATFORM_ID) private platformId: Object // ✅ Detects Browser
  ) {}

  ngOnInit(): void {
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

        // ✅ Use sessionStorage only in browser environment
        if (isPlatformBrowser(this.platformId) && this.userData?.name) {
          sessionStorage.setItem('userName', this.userData.name);
        }
      },
      error: (err) => {
        console.error('Error fetching user:', err);
      },
    });
  }

  bindFiled() {
    if (!this.userData) return;
    this.userData = {
      name: this.userData.name,
      email: this.userData.email,
      phone: this.userData.phone,
      dateOfBirth: this.userData.dateOfBirth,
    };
  }

  selectTab(tabName: string) {
    console.log('Selected Tab:', tabName);
    this.selectedTabName = tabName;
  }
}

// import { Component, OnInit, Inject, PLATFORM_ID } from '@angular/core';
// import { CommonModule, isPlatformBrowser } from '@angular/common';
// import { FormsModule } from '@angular/forms';
// import { ActivatedRoute } from '@angular/router';
// import { UserService } from '../service/user.service';
// import { RouterModule } from '@angular/router'; // ✅ Add this import

// @Component({
//   selector: 'app-profile',
//   standalone: true,
//   imports: [CommonModule, FormsModule, RouterModule],
//   templateUrl: './profile.component.html',
//   styleUrls: ['./profile.component.css'],
// })
// export class ProfileComponent implements OnInit {
//   // ✅ Variables used in the template
//   userEmail: string = 'aditya@gmail.com';
//   userData: any = {};
//   selectedTabName: string = 'Account Settings';

//   // ✅ Sidebar menu items
//   sideBarItems = [
//     'Account Settings',
//     'Order History',
//     'Payment Method',
//     'Addresses',
//     'Help Center',
//     'Promocodes & Offers',
//     'Meal Plan Subscription',
//     'Invite Friends',
//     'Privacy',
//     'Logout',
//     'Delete Account',
//   ];

//   // ✅ Constructor with dependency injection
//   constructor(
//     private userService: UserService,
//     private route: ActivatedRoute,
//     @Inject(PLATFORM_ID) private platformId: Object
//   ) {}

//   // ✅ Lifecycle hook
//   ngOnInit(): void {
//     const id = this.route.snapshot.paramMap.get('id');
//     if (id) {
//       this.getUserDetails(+id);
//     }
//   }

//   // ✅ Fetch user data
//   getUserDetails(id: number) {
//     this.userService.getUserById(id).subscribe({
//       next: (data) => {
//         console.log('User data:', data);
//         this.userData = data;

//         // ✅ Only use sessionStorage in browser environment
//         if (isPlatformBrowser(this.platformId) && this.userData?.name) {
//           sessionStorage.setItem('userName', this.userData.name);
//         }
//       },
//       error: (err) => {
//         console.error('Error fetching user:', err);
//       },
//     });
//   }

//   // ✅ Bind user fields if needed
//   bindField() {
//     if (!this.userData) return;
//     this.userData = {
//       name: this.userData.name,
//       email: this.userData.email,
//       phone: this.userData.phone,
//       dateOfBirth: this.userData.dateOfBirth,
//     };
//   }

//   // ✅ Handle sidebar tab click
//   selectTab(tabName: string) {
//     console.log('Selected Tab:', tabName);
//     this.selectedTabName = tabName;
//   }
// }

// import { Component, OnInit } from '@angular/core';

// import { Component, OnInit, Inject, PLATFORM_ID } from '@angular/core';
// import { UserService } from '../service/user.service';
// import { ActivatedRoute } from '@angular/router';
// import { CommonModule, isPlatformBrowser } from '@angular/common';
// import { FormsModule } from '@angular/forms';

// @Component({
//   selector: 'app-profile',
//   standalone: true,
//   imports: [CommonModule, FormsModule],
//   templateUrl: './profile.component.html',
//   styleUrls: ['./profile.component.css'],
// })
// export class ProfileComponent implements OnInit {
//   userEmail: string = 'aditya@gmail.com';
//   userData: any = {};
//   selectedTabName: string = 'Account Settings';

//   ngOnInit(): void {}
// }

//   sideBarItems = [
//     'Account Settings',
//     'Order History',
//     'Payment Method',
//     'Addresses',
//     'Help Center',
//     'Promocodes & Offers',
//     'Meal Plan Subscription',
//     'Invite Friends',
//     'Privacy',
//     'Logout',
//     'Delete Account'
//   ];

//   constructor(
//     private userService: UserService,
//     private route: ActivatedRoute,
//     @Inject(PLATFORM_ID) private platformId: Object  // ✅ Detects Browser
//   ) {}

//   ngOnInit(): void {
//     const id = this.route.snapshot.paramMap.get('id');
//     if (id) {
//       this.getUserDetails(+id);
//     }
//   }

//   getUserDetails(id: number) {
//     this.userService.getUserById(id).subscribe({
//       next: (data) => {
//         console.log('User data:', data);
//         this.userData = data;

//         // ✅ Use sessionStorage only in browser environment
//         if (isPlatformBrowser(this.platformId) && this.userData?.name) {
//           sessionStorage.setItem('userName', this.userData.name);
//         }
//       },
//       error: (err) => {
//         console.error('Error fetching user:', err);
//       }
//     });
//   }

//   bindFiled() {
//     if (!this.userData) return;
//     this.userData = {
//       name: this.userData.name,
//       email: this.userData.email,
//       phone: this.userData.phone,
//       dateOfBirth: this.userData.dateOfBirth,
//     };
//   }

//   selectTab(tabName: string) {
//     console.log('Selected Tab:', tabName);
//     this.selectedTabName = tabName;
//   }
// }
