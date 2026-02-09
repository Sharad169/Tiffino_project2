import { Component, ElementRef, HostListener } from '@angular/core';
import { Sidebar2Component } from '../sidebar2/sidebar2.component';
import { CommonModule } from '@angular/common';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-superadmindelpartnerlist',
  standalone: true,
  imports: [Sidebar2Component, CommonModule, RouterModule],
  templateUrl: './superadmindelpartnerlist.component.html',
  styleUrls: ['./superadmindelpartnerlist.component.css'], // ✅ fixed 'styleUrls' typo
})
export class SuperadmindelpartnerlistComponent {
  dropdownOpen = false;
  selectedOption: string = 'Delivery Partner'; // ✅ Default selected for this page
  roles = ['Manager', 'Chef', 'Delivery Partner'];

  constructor(private router: Router) {}

  employees = [
    {
      name: 'Name: Arnav Pillai ',
      position: 'Delivery Partner',
      kitchenId: 'SHD-KCH019',
      employeeId: 'SHD019',
      image: '/assets/Arnavp.jpg',
    },
    {
      name: 'Name: Ritesh Reddy',
      position: 'Delivery Partner',
      kitchenId: 'SHD-KCH020',
      employeeId: 'SHD020',
      image: '/assets/Riiteshr.jpg',
    },
    {
      name: 'Name: Sameer Joshi',
      position: 'Delivery Partner',
      kitchenId: 'SHD-KCH021',
      employeeId: 'SHD021',
      image: '/assets/samirj.jpg',
    },
    {
      name: 'Name: Pranav Deshmukh',
      position: 'Delivery Partner',
      kitchenId: 'SHD-KCH022',
      employeeId: 'SHD022',
      image: '/assets/Prannavd.jpg',
    },
    {
      name: 'Name: Dhruv Chatterjee',
      position: 'Manager',
      kitchenId: 'SHD-KCH023',
      employeeId: 'SHD023',
      image: '/assets/Dhruvc.jpg',
    },
  ];

  toggleDropdown(event: Event) {
    event.stopPropagation();
    this.dropdownOpen = !this.dropdownOpen;
  }

  // ✅ Role-based navigation
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
