import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { CommonModule } from '@angular/common';
import { SuperadminSidebarComponent } from '../superadmin-sidebar/superadmin-sidebar.component';
import { AdminService } from '../admin.service';
import { HttpErrorResponse } from '@angular/common/http';
 
@Component({
  selector: 'app-superadminmanagereditpage',
  standalone: true,
  imports: [SuperadminSidebarComponent, CommonModule],
  templateUrl: './superadminmanagereditpage.component.html',
  styleUrls: ['./superadminmanagereditpage.component.css'],
})
export class SuperadminmanagereditpageComponent implements OnInit {
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
    // ✅ STEP 1: READ employeeCode FROM URL
    this.employeeCode = this.route.snapshot.paramMap.get('employeeCode')!;
 
    if (!this.employeeCode) {
      console.error('Employee code missing');
      return;
    }
 
    // ✅ STEP 2: LOAD DATA
    this.loadEmployeeInfo();
    this.loadChangeRequests();
  }
 
  // ================= API: EMPLOYEE INFO =================
  loadEmployeeInfo() {
    this.adminService.getEmployeeById(this.employeeCode).subscribe({
      next: (res) => {
        this.employee = res;
      },
      error: (err: HttpErrorResponse) => {
        console.error('Failed to load employee info', err.message);
      },
    });
  }
 
  // ================= API: EDIT DIFFERENCES =================
  loadChangeRequests() {
    this.adminService.getEditDifferences(this.employeeCode).subscribe({
      next: (res: any[]) => {
        this.changeRequests = res;
      },
      error: (err: HttpErrorResponse) => {
        console.error('Failed to load employee info', err.message);
      },
    });
  }
 
  // ================= TAB HANDLER =================
  setActiveTab(tab: 'info' | 'blank') {
    this.activeTab = tab;
  }
 
  // ================= FILE CHECK =================
  isFile(value: string): boolean {
    return value?.startsWith('http');
  }
 
  // ================= NAVIGATION =================
  navigateTo(route: string) {
    this.router.navigate([route]);
  }
  // ================= APPROVE =================
  approveRequest() {
    if (!this.employeeCode) return;
 
    this.adminService.approveEditRequest(this.employeeCode).subscribe({
      next: (res: string) => {
        // ✅ SUCCESS MESSAGE FROM BACKEND
        alert(res);
        this.router.navigate(['/superadmineditlist']); // ✅ redirect
      },
      error: (err) => {
        const msg = this.getBackendErrorMessage(err);
        alert(msg);
        this.router.navigate(['/superadmineditlist']); // ✅ redirect
        console.error('Approve failed:', err);
      },
    });
  }
 
  // ================= REJECT =================
  rejectRequest() {
    if (!this.employeeCode) return;
 
    this.adminService.rejectEditRequest(this.employeeCode).subscribe({
      next: (res: string) => {
        // ✅ SUCCESS MESSAGE FROM BACKEND
        alert(res);
        this.router.navigate(['/superadmineditlist']); // ✅ redirect
      },
      error: (err) => {
        const msg = this.getBackendErrorMessage(err);
        alert(msg);
        this.router.navigate(['/superadmineditlist']); // ✅ redirect
        console.error('Reject failed:', err);
      },
    });
  }
  private getBackendErrorMessage(err: any): string {
    // Case 1: error is already an object
    if (err?.error?.message) {
      return err.error.message;
    }
 
    // Case 2: error is JSON string
    if (typeof err?.error === 'string') {
      try {
        const parsed = JSON.parse(err.error);
        return parsed.message || err.error;
      } catch {
        return err.error; // plain text
      }
    }
 
    // Fallback
    return 'Something went wrong. Please try again.';
  }
}
 
 
