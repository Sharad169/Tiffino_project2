import { Component, HostListener, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common'; 
import { Router, RouterModule } from '@angular/router';
import { SuperadminSidebarComponent } from '../superadmin-sidebar/superadmin-sidebar.component';
import { AdminService } from '../admin.service';

@Component({
  selector: 'app-listemployee',
  standalone: true,
  imports: [ CommonModule, RouterModule, SuperadminSidebarComponent],
  templateUrl: './listemployee.component.html',
  styleUrls: ['./listemployee.component.css'],
})
export class ListemployeeComponent implements OnInit {

  employees: any[] = [];         // All employees
  filteredEmployees: any[] = []; // Filtered list based on role

  roles: string[] = ['All', 'Manager', 'Chef', 'Delivery Partner'];
  selectedOption: string = 'All';
  dropdownOpen: boolean = false;

  constructor(public api: AdminService, private router : Router) {}

  ngOnInit(): void {
    this.loadAllEmployees();
  }

  toggleDropdown(event: Event) {
    event.stopPropagation();
    this.dropdownOpen = !this.dropdownOpen;
  }

  selectRole(role: string) {
    this.selectedOption = role;
    this.dropdownOpen = false;

    // ✅ Filter employees based on role
    if (role === 'All') {
      this.filteredEmployees = [...this.employees];
    } else {
      this.filteredEmployees = this.employees.filter(emp => emp.role === role);
    }
  }

  @HostListener('document:click')
  closeDropdown() {
    this.dropdownOpen = false;
  }

  loadAllEmployees() {
    this.api.showAllEmployees().subscribe({
      next: (res) => {
        console.log("FULL API RESPONSE:", res);

        this.employees = [
          ...(res.Manager || []).map((m: any) => ({ ...m, role: 'Manager', image: m.image || '' })),
          ...(res.chefs || []).map((c: any) => ({ ...c, role: 'Chef', image: c.image || '' })),
          ...(res.deliverypartners || []).map((d: any) => ({ ...d, role: 'Delivery Partner', image: d.image || '' }))
        ];

        // Initially show all employees
        this.filteredEmployees = [...this.employees];
        console.log("FINAL EMPLOYEE LIST:", this.employees);
      },
      error: (err) => console.error('❌ Error fetching employees:', err)
    });
  }

getPhoto(emp: any) {
  // If no photo or photo is PDF → return default image
  if (!emp.photo || emp.photo.endsWith('.pdf')) {
    return 'assets/default-user.png'; 
  }

  return emp.photo;
}

emloyeeDetails(empId:any){
  console.log("Employee ID:", empId);
  this.router.navigate(['/superadminmanagerdetails', empId]);

}
}
