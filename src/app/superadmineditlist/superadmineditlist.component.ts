import { Component, HostListener, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { SuperadminSidebarComponent } from '../superadmin-sidebar/superadmin-sidebar.component';
import { AdminService } from '../admin.service';
import { Router } from '@angular/router';
 
@Component({
  selector: 'app-listemployee',
  standalone: true,
  imports: [SuperadminSidebarComponent, CommonModule, RouterModule],
  templateUrl: './superadmineditlist.component.html',
  styleUrls: ['./superadmineditlist.component.css'],
})
export class SuperadmineditlistComponent implements OnInit {
  dropdownOpen = false;
 
  roles: string[] = ['All', 'MANAGER', 'CHEF', 'DELIVERY_PARTNER'];
  selectedOption: string = 'All';
 
  employees: any[] = []; // full list
  filteredEmployees: any[] = []; // filtered list
 
  constructor(private adminService: AdminService, private router: Router) {}
 
  ngOnInit(): void {
    this.loadEditRequests();
  }
 
  // ================= LOAD DATA =================
  loadEditRequests() {
    this.adminService.getAllEditRequests().subscribe({
      next: (res) => {
        this.employees = res.map((item) => ({
          name: item.name,
          position: item.role,
          kitchenId: item.kitchenCode,
          employeeId: item.employeeCode,
          image: item.photo,
          status: item.editStatus,
        }));
 
        // ✅ show all by default
        this.filteredEmployees = [...this.employees];
      },
      error: (err) => {
        console.error('Failed to load edit requests', err);
      },
    });
  }
 
  // ================= DROPDOWN =================
  toggleDropdown(event: Event) {
    event.stopPropagation();
    this.dropdownOpen = !this.dropdownOpen;
  }
 
  selectRole(role: string) {
    this.selectedOption = role;
    this.dropdownOpen = false;
 
    if (role === 'All') {
      this.filteredEmployees = [...this.employees];
    } else {
      this.filteredEmployees = this.employees.filter(
        (emp) => emp.position === role
      );
    }
  }
 
  @HostListener('document:click')
  closeDropdown() {
    this.dropdownOpen = false;
  }
  openEditPage(emp: any) {
    const employeeCode = emp.employeeId;
    const role = emp.position; // MANAGER | CHEF | DELIVERY_PARTNER
 
    switch (role) {
      case 'MANAGER':
        this.router.navigate(['/superadminmanagereditpage', employeeCode]);
        break;
 
      case 'CHEF':
        this.router.navigate(['/superadminchefeditpage', employeeCode]);
        break;
 
      case 'DELIVERY_PARTNER':
        this.router.navigate(['/superadmindelpartnereditpage', employeeCode]);
        break;
 
      default:
        console.error('Unknown role:', role);
    }
  }
}
 
 