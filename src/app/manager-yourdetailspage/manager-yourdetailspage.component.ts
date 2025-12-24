import { Component, OnInit } from '@angular/core';
import { ManagersidebarComponent } from '../managersidebar/managersidebar.component';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ManagerService } from '../service/manager.service';

@Component({
  selector: 'app-manager-yourdetailspage',
  standalone: true,
  imports: [ManagersidebarComponent, CommonModule, FormsModule],
  templateUrl: './manager-yourdetailspage.component.html',
  styleUrls: ['./manager-yourdetailspage.component.css'],
})
export class ManagerYourdetailspageComponent implements OnInit {
  // ✅ TAKE MANAGER CODE FROM LOGIN SESSION

  managerCode = '';


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
    photo: '',
  };

  loading = false;
  errorMsg = '';

  constructor(private router: Router, private managerService: ManagerService) {}

  ngOnInit(): void {
    // ✅ DO NOT TOUCH INTEGRATION – JUST CHANGE SOURCE
    this.managerCode = sessionStorage.getItem('managerCode') || '';

    if (!this.managerCode) {
      this.errorMsg = 'Manager not logged in';
      return;
    }

    this.loadManagerDetails();
  }

  loadManagerDetails() {
    this.loading = true;

    this.managerService.getManagerByCode(this.managerCode).subscribe({
      next: (res) => {
        this.manager = res; // ✅ SAME API RESPONSE
        this.loading = false;
        console.log("manager Data", this.manager);
         sessionStorage.setItem('kitchenCode', this.manager.kitchenCode || '');
        
      },
      error: (err) => {
        console.error('API Error:', err);
        this.errorMsg =
          'Unable to load manager details. Access denied or server error.';
        this.loading = false;
      },
    });
  }


  goToEditPage() {
    this.router.navigate(['/manageryourdetailseditrequestpage']);
  }
}