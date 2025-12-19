import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { ManagersidebarComponent } from '../managersidebar/managersidebar.component';
import { ManagerService } from '../service/manager.service';


@Component({
  selector: 'app-manageryourdetailseditrequestpage',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterModule, ManagersidebarComponent],
  templateUrl: './manageryourdetailseditrequestpage.component.html',
  styleUrls: ['./manageryourdetailseditrequestpage.component.css'],
})
export class ManagerYourdetailseditrequestpageComponent implements OnInit {
  // ✅ SESSION BASED
  managerCode = '';

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
    photo: '',
  };

  loading = false;
  errorMsg = '';

  constructor(private router: Router, private managerService: ManagerService) {}

  ngOnInit(): void {
    this.managerCode = sessionStorage.getItem('managerCode') || '';

    if (!this.managerCode) {
      this.errorMsg = 'Manager not logged in';
      return;
    }

    this.loadManagerDetails();
  }

  loadManagerDetails(): void {
    this.loading = true;

    this.managerService.getManagerByCode(this.managerCode).subscribe({
      next: (res: any) => {
        this.manager = res; // ✅ SAME API
        console.log(this.manager);
        
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

  goBack(): void {
    this.router.navigate(['/manager-yourdetailspage']);
  }
}