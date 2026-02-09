import { Component, HostListener } from '@angular/core';
import { Sidebar2Component } from '../sidebar2/sidebar2.component';
import { CommonModule } from '@angular/common';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-superadminmanagerlist',
  standalone: true,
  imports: [Sidebar2Component, CommonModule, RouterModule],
  templateUrl: './superadminmanagerlist.component.html',
  styleUrls: ['./superadminmanagerlist.component.css'],
})
export class SuperadminmanagerlistComponent {
  dropdownOpen = false;
  selectedOption: string = ''; // we'll set it dynamically
  roles = ['Manager', 'Chef', 'Delivery Partner'];

  constructor(private router: Router) {
    // ✅ Set selected option based on current route
    const currentUrl = this.router.url;
    if (currentUrl.includes('managerlist')) {
      this.selectedOption = 'Manager';
    } else if (currentUrl.includes('cheflist')) {
      this.selectedOption = 'Chef';
    } else if (currentUrl.includes('delpartnerlist')) {
      this.selectedOption = 'Delivery Partner';
    } else {
      this.selectedOption = 'List of Employee';
    }
  }

  // 🔽 Toggle Dropdown
  toggleDropdown(event: Event) {
    event.stopPropagation();
    this.dropdownOpen = !this.dropdownOpen;
  }

  // 🔽 Handle Dropdown Selection + Navigation
  selectRole(role: string) {
    this.selectedOption = role;
    this.dropdownOpen = false;

    // ✅ Navigate to specific list pages
    if (role === 'Manager') {
      this.router.navigate(['/superadminmanagerlist']);
    } else if (role === 'Chef') {
      this.router.navigate(['/superadmincheflist']);
    } else if (role === 'Delivery Partner') {
      this.router.navigate(['/superadmindelpartnerlist']);
    }
  }

  // 🔽 Close dropdown when clicking outside
  @HostListener('document:click')
  closeDropdown() {
    this.dropdownOpen = false;
  }

  // Dummy employees (your list can stay the same)
  employees = [
    {
      name: 'Name: Aditya Verma',
      position: 'Manager',
      kitchenId: 'SHD-KCH007',
      employeeId: 'SHD007',
      image: '/assets/Adityav.jpg',
    },
    {
      name: 'Name: Arjun Singh',
      position: 'Manager',
      kitchenId: 'SHD-KCH008',
      employeeId: 'SHD008',
      image: '/assets/Arjuns.jpg',
    },
    {
      name: 'Name: Karan Patel',
      position: 'Manager',
      kitchenId: 'SHD-KCH009',
      employeeId: 'SHD009',
      image: '/assets/Karanp.jpg',
    },
    {
      name: 'Name: Manish Yadav',
      position: 'Manager',
      kitchenId: 'SHD-KCH010',
      employeeId: 'SHD010',
      image: '/assets/Manishy.jpg',
    },
    {
      name: 'Name: Rahul Nair',
      position: 'Manager',
      kitchenId: 'SHD-KCH011',
      employeeId: 'SHD011',
      image: '/assets/Rahuln.jpg',
    },
  ];
}
