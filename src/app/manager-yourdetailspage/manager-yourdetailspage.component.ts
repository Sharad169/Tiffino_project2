import { Component, OnInit } from '@angular/core';
import { ManagersidebarComponent } from '../managersidebar/managersidebar.component';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ManagerService } from '../manager.service';

@Component({
  selector: 'app-manager-yourdetailspage',
  standalone: true,
  imports: [ManagersidebarComponent, CommonModule, FormsModule],
  templateUrl: './manager-yourdetailspage.component.html',
  styleUrls: ['./manager-yourdetailspage.component.css'],
})
export class ManagerYourdetailspageComponent implements OnInit {
  managerCode = 'MAN002';

  // ✅ SAFE DEFAULT OBJECT (prevents undefined crash)
  manager: any = {
    name: '',
    email: '',
    dateOfBirth: '',
    phone: '',
    kitchenCode: '',
    bankAccountNum: '',
    ifsc: '',
    permanentAddress: '',
    currentAddress: '',
  };

  loading = false;
  errorMsg = '';

  constructor(private router: Router, private managerService: ManagerService) {}

  ngOnInit(): void {
    this.loadManagerDetails();
  }

  loadManagerDetails() {
    this.loading = true;

    this.managerService.getManagerByCode(this.managerCode).subscribe({
      next: (res) => {
        this.manager = res; // ✅ API data binds safely
        this.loading = false;
      },
      error: (err) => {
        console.error('API Error:', err);
        this.errorMsg =
          'Unable to load manager details. Access denied or server error.';
        this.loading = false;
      },
    });
  }

  // ✅ EDIT ICON NAVIGATION
  goToEditPage() {
    console.log('Edit icon clicked');
    this.router.navigate(['/manageryourdetailseditrequestpage']);
  }
}
