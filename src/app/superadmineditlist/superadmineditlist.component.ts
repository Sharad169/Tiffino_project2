import { Component, ElementRef, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Sidebar2Component } from '../sidebar2/sidebar2.component';
import { RouterModule, Router } from '@angular/router';

@Component({
  selector: 'app-listemployee',
  standalone: true,
  imports: [Sidebar2Component, CommonModule, RouterModule],
  templateUrl: './superadmineditlist.component.html',
  styleUrls: ['./superadmineditlist.component.css'],
})
export class SuperadmineditlistComponent {
  dropdownOpen = false;
  selectedOption: string = 'Select Employee';
  roles = ['Manager', 'Chef', 'Delivery Partner'];

  employees = [
    {
      name: 'Name: Kishan Kumar ',
      position: 'Delivery Partner',
      kitchenId: 'SHD-KCH001',
      employeeId: 'SHD001',
      image: '/assets/kishank.jpg',
    },
    {
      name: 'Name: Rajesh Kumar',
      position: 'Delivery Partner',
      kitchenId: 'SHD-KCH002',
      employeeId: 'SHD002',
      image: '/assets/rajeshk.jpg',
    },
    {
      name: 'Name: Ritesh Reddy',
      position: 'Delivery Partner',
      kitchenId: 'SHD-KCH020',
      employeeId: 'SHD020',
      image: '/assets/riteshr.jpg',
    },
    {
      name: 'Name: Sameer Joshi',
      position: 'Delivery Partner',
      kitchenId: 'SHD-KCH021',
      employeeId: 'SHD021',
      image: '/assets/sameerj.jpg',
    },
    {
      name: 'Name: Pranav Deshmukh',
      position: 'Delivery Partner',
      kitchenId: 'SHD-KCH022',
      employeeId: 'SHD022',
      image: '/assets/Pranavd.jpg',
    },
    {
      name: 'Name: Harsh Tiwari ',
      position: 'Chef',
      kitchenId: 'SHD-KCH015',
      employeeId: 'SHD015',
      image: '/assets/Harsh.jpg',
    },
    {
      name: 'Name: Aayush Bhatia',
      position: 'Chef',
      kitchenId: 'SHD-KCH012',
      employeeId: 'SHD012',
      image: '/assets/aayushb.jpg',
    },
  ];

  constructor(private router: Router) {}

  toggleDropdown(event: Event) {
    event.stopPropagation();
    this.dropdownOpen = !this.dropdownOpen;
  }

  selectRole(role: string) {
    this.selectedOption = role;
    this.dropdownOpen = false;

    // ✅ Navigate to respective page based on role
    if (role === 'Manager') {
      this.router.navigate(['/superadminmanagereditpage']);
    } else if (role === 'Chef') {
      this.router.navigate(['/superadminchefeditpage']);
    } else if (role === 'Delivery Partner') {
      this.router.navigate(['/superadmindelpartnereditpage']);
    }
  }

  @HostListener('document:click')
  closeDropdown() {
    this.dropdownOpen = false;
  }
}
