import { Component, ElementRef, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common'; 
import { Router, RouterModule } from '@angular/router';
import { SuperadminSidebarComponent } from '../superadmin-sidebar/superadmin-sidebar.component';

 
@Component({
  selector: 'app-listemployee',
  standalone: true,
  imports: [ CommonModule, RouterModule, SuperadminSidebarComponent],
  templateUrl: './listemployee.component.html',
  styleUrls: ['./listemployee.component.css'],
})
export class ListemployeeComponent {
  dropdownOpen = false;
  selectedOption: string = 'List of Employee';
  roles = ['Manager', 'Chef', 'Delivery Partner'];
  constructor(private router: Router) {}
  employees = [
    {
      name: 'Name: Kishan Kumar ',
      position: 'Delivery Partner',
      kitchenId: 'SHD-KCH001',
      employeeId: 'SHD001',
      image: '/assets/kishank.jpg',
    },
    {
      name: 'Name: Ravi Kishan',
      position: 'Chef',
      kitchenId: 'SHD-KCH002',
      employeeId: 'SHD002',
      image: '/assets/ravik.jpg',
    },
    {
      name: 'Name: Akank Kumar',
      position: 'Chef',
      kitchenId: 'SHD-KCH003',
      employeeId: 'SHD003',
      image: '/assets/akankk.jpg',
    },
    {
      name: 'Name: Abhay Khanna',
      position: 'Delivery Partner',
      kitchenId: 'SHD-KCH004',
      employeeId: 'SHD004',
      image: '/assets/abhayk.jpg',
    },
    {
      name: 'Name: Aarav Mehta',
      position: 'Manager',
      kitchenId: 'SHD-KCH005',
      employeeId: 'SHD005',
      image: '/assets/aravm.jpg',
    },
 
    {
      name: 'Name: Kishan Kumar ',
      position: 'Delivery Partner',
      kitchenId: 'SHD-KCH001',
      employeeId: 'SHD001',
      image: '/assets/kishank.jpg',
    },
    {
      name: 'Name: Ravi Kishan',
      position: 'Chef',
      kitchenId: 'SHD-KCH002',
      employeeId: 'SHD002',
      image: '/assets/ravik.jpg',
    },
    {
      name: 'Name: Akank Kumar',
      position: 'Chef',
      kitchenId: 'SHD-KCH003',
      employeeId: 'SHD003',
      image: '/assets/akankk.jpg',
    },
    {
      name: 'Name: Abhay Khanna',
      position: 'Delivery Partner',
      kitchenId: 'SHD-KCH004',
      employeeId: 'SHD004',
      image: '/assets/abhayk.jpg',
    },
    {
      name: 'Name: Aarav Mehta',
      position: 'Manager',
      kitchenId: 'SHD-KCH005',
      employeeId: 'SHD005',
      image: '/assets/aravm.jpg',
    },
    {
      name: 'Name: Kishan Kumar ',
      position: 'Delivery Partner',
      kitchenId: 'SHD-KCH001',
      employeeId: 'SHD001',
      image: '/assets/kishank.jpg',
    },
    {
      name: 'Name: Ravi Kishan',
      position: 'Chef',
      kitchenId: 'SHD-KCH002',
      employeeId: 'SHD002',
      image: '/assets/ravik.jpg',
    },
    {
      name: 'Name: Akank Kumar',
      position: 'Chef',
      kitchenId: 'SHD-KCH003',
      employeeId: 'SHD003',
      image: '/assets/akankk.jpg',
    },
    {
      name: 'Name: Abhay Khanna',
      position: 'Delivery Partner',
      kitchenId: 'SHD-KCH004',
      employeeId: 'SHD004',
      image: '/assets/abhayk.jpg',
    },
    {
      name: 'Name: Aarav Mehta',
      position: 'Manager',
      kitchenId: 'SHD-KCH005',
      employeeId: 'SHD005',
      image: '/assets/aravm.jpg',
    },
    {
      name: 'Name: Kishan Kumar ',
      position: 'Delivery Partner',
      kitchenId: 'SHD-KCH001',
      employeeId: 'SHD001',
      image: '/assets/kishank.jpg',
    },
    {
      name: 'Name: Ravi Kishan',
      position: 'Chef',
      kitchenId: 'SHD-KCH002',
      employeeId: 'SHD002',
      image: '/assets/ravik.jpg',
    },
    {
      name: 'Name: Akank Kumar',
      position: 'Chef',
      kitchenId: 'SHD-KCH003',
      employeeId: 'SHD003',
      image: '/assets/akankk.jpg',
    },
    {
      name: 'Name: Abhay Khanna',
      position: 'Delivery Partner',
      kitchenId: 'SHD-KCH004',
      employeeId: 'SHD004',
      image: '/assets/abhayk.jpg',
    },
    {
      name: 'Name: Aarav Mehta',
      position: 'Manager',
      kitchenId: 'SHD-KCH005',
      employeeId: 'SHD005',
      image: '/assets/aravm.jpg',
    },
  ];
 
  toggleDropdown(event: Event) {
    event.stopPropagation();
    this.dropdownOpen = !this.dropdownOpen;
  }
 
  selectRole(role: string) {
    this.selectedOption = role;
    this.dropdownOpen = false;
 
    // ✅ Navigate based on selected role
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
 
 