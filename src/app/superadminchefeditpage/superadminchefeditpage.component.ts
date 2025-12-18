import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { CommonModule } from '@angular/common';
import { SuperadminSidebarComponent } from '../superadmin-sidebar/superadmin-sidebar.component';
import { AdminService } from '../admin.service';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-superadminchefeditpage',
  standalone: true,
  imports: [SuperadminSidebarComponent, CommonModule],
  templateUrl: './superadminchefeditpage.component.html',
  styleUrls: ['./superadminchefeditpage.component.css'],
})
export class SuperadminchefeditpageComponent implements OnInit {
  // ================= ROUTE DATA =================
  employeeCode!: string;

  // ================= TAB STATE =================
  activeTab: 'info' | 'blank' = 'info';

  // ================= EMPLOYEE INFO =================
  employee: any = {};

  // ================= CHANGE REQUESTS =================
  changeRequests: any[] = [];

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private adminService: AdminService
  ) {}

  // ================= INIT =================
  ngOnInit(): void {
    this.employeeCode = this.route.snapshot.paramMap.get('employeeCode')!;

    if (!this.employeeCode) {
      console.error('Employee code missing');
      return;
    }

    this.loadEmployeeInfo();
    this.loadChangeRequests();
  }

  // ================= LOAD EMPLOYEE =================
  loadEmployeeInfo() {
    this.adminService.getEmployeeById(this.employeeCode).subscribe({
      next: (res) => {
        this.employee = res;
      },
      error: (err: HttpErrorResponse) => {
        console.error('Failed to load chef info', err);
      },
    });
  }

  // ================= LOAD EDIT DIFFERENCES =================
  loadChangeRequests() {
    this.adminService.getEditDifferences(this.employeeCode).subscribe({
      next: (res: any[]) => {
        this.changeRequests = res;
      },
      error: (err: HttpErrorResponse) => {
        console.error('Failed to load edit differences', err);
      },
    });
  }

  // ================= TAB SWITCH =================
  setActiveTab(tab: 'info' | 'blank') {
    this.activeTab = tab;
  }

  // ================= APPROVE =================
  approveRequest() {
    if (!this.employeeCode) return;

    this.adminService.approveEditRequest(this.employeeCode).subscribe({
      next: (res: string) => {
        alert(res); // backend success message
      },
      error: (err) => {
        alert(this.getBackendErrorMessage(err));
        console.error('Approve failed', err);
      },
    });
  }

  // ================= REJECT =================
  rejectRequest() {
    if (!this.employeeCode) return;

    this.adminService.rejectEditRequest(this.employeeCode).subscribe({
      next: (res: string) => {
        alert(res); // backend success message
      },
      error: (err) => {
        alert(this.getBackendErrorMessage(err));
        console.error('Reject failed', err);
      },
    });
  }

  // ================= BACKEND ERROR HANDLER =================
  private getBackendErrorMessage(err: any): string {
    if (err?.error?.message) {
      return err.error.message;
    }

    if (typeof err?.error === 'string') {
      try {
        const parsed = JSON.parse(err.error);
        return parsed.message || err.error;
      } catch {
        return err.error;
      }
    }

    return 'Something went wrong. Please try again.';
  }

  // ================= NAVIGATION =================
  navigateTo(route: string) {
    this.router.navigate([route]);
  }
}
