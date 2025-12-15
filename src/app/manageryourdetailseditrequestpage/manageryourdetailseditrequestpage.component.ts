import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { ManagersidebarComponent } from '../managersidebar/managersidebar.component';
import { ManagerService } from '../manager.service';

@Component({
  selector: 'app-manageryourdetailseditrequestpage',
  standalone: true,
  // ✅ FormsModule ADDED (CRITICAL)
  imports: [CommonModule, FormsModule, RouterModule, ManagersidebarComponent],
  templateUrl: './manageryourdetailseditrequestpage.component.html',
  styleUrls: ['./manageryourdetailseditrequestpage.component.css'],
})
export class ManagerYourdetailseditrequestpageComponent implements OnInit {
  managerCode = 'MAN002';

  // ✅ SAFE DEFAULT OBJECT
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
    photo: '/assets/aaditya.jpg',
  };

  loading = false;
  errorMsg = '';

  constructor(private router: Router, private managerService: ManagerService) {}

  ngOnInit(): void {
    this.loadManagerDetails();
  }

  loadManagerDetails(): void {
    this.loading = true;

    this.managerService.getManagerByCode(this.managerCode).subscribe({
      next: (res: any) => {
        this.manager = res;
        this.loading = false;
      },
      error: (err: any) => {
        console.error('API Error:', err);
        this.errorMsg =
          'Unable to load manager details. Access denied or server error.';
        this.loading = false;
      },
    });
  }

  // ✅ METHOD HTML IS CALLING
  goToEditPage(): void {
    // if you want to stay on same page, remove navigation
    console.log('Edit icon clicked');
  }

  goBack(): void {
    this.router.navigate(['/manager-yourdetailspage']);
  }
}
