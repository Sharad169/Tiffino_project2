import { Component, ElementRef, HostListener } from '@angular/core';
import { Sidebar2Component } from '../sidebar2/sidebar2.component';
import { CommonModule } from '@angular/common';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-superadmincheflist',
  standalone: true,
  imports: [Sidebar2Component, CommonModule, RouterModule],
  templateUrl: './superadmincheflist.component.html',
  styleUrls: ['./superadmincheflist.component.css'],
})
export class SuperadmincheflistComponent {
  dropdownOpen = false;
  selectedOption: string = 'Chef'; // ✅ Default selected option for this page
  roles = ['Manager', 'Chef', 'Delivery Partner'];

  constructor(private router: Router) {}

  employees = [
    {
      name: 'Name: Vivek Chauhan ',
      position: 'Chef',
      kitchenId: 'SHD-KCH013',
      employeeId: 'SHD013',
      image: '/assets/Vivekc.jpg',
    },
    {
      name: 'Name: Neel Khanna',
      position: 'Chef',
      kitchenId: 'SHD-KCH014',
      employeeId: 'SHD014',
      image: '/assets/Neelk.jpg',
    },
    {
      name: 'Name: Harsh Tiwari',
      position: 'Chef',
      kitchenId: 'SHD-KCH015',
      employeeId: 'SHD015',
      image: '/assets/Harsht.jpg',
    },
    {
      name: 'Name: Ayush Bhatia',
      position: 'Chef',
      kitchenId: 'SHD-KCH016',
      employeeId: 'SHD016',
      image: '/assets/Ayushb.jpg',
    },
    {
      name: 'Name: Krish Malhotra',
      position: 'Chef',
      kitchenId: 'SHD-KCH017',
      employeeId: 'SHD017',
      image: '/assets/Krishm.jpg',
    },
  ];

  toggleDropdown(event: Event) {
    event.stopPropagation();
    this.dropdownOpen = !this.dropdownOpen;
  }

  // ✅ When user selects a role, navigate to corresponding page
  selectRole(role: string) {
    this.selectedOption = role;
    this.dropdownOpen = false;

    if (role === 'Manager') {
      this.router.navigate(['/superadminmanagerlist']);
    } else if (role === 'Chef') {
      this.router.navigate(['/superadmincheflist']);
    } else if (role === 'Delivery Partner') {
      this.router.navigate(['/superadmindelpartnerlist']);
    }
  }

  @HostListener('document:click')
  closeDropdown() {
    this.dropdownOpen = false;
  }
}
