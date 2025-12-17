import { Component, OnInit } from '@angular/core';
import { NgIf } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ManagersidebarComponent } from '../managersidebar/managersidebar.component';
import { ManagerService } from '../manager.service';

@Component({
  selector: 'app-manager-yourdetailssubmitpage',
  standalone: true,
  imports: [ManagersidebarComponent, NgIf, FormsModule],
  templateUrl: './manager-yourdetailssubmitpage.component.html',
  styleUrls: ['./manager-yourdetailssubmitpage.component.css'],
})
export class ManagerYourdetailssubmitpageComponent implements OnInit {
  // ===== HEADER DISPLAY ONLY =====
  manager: any = {
    name: '',
    email: '',
    photo: '',
  };

  showPopup = false;
  popupTitle = '';
  popupMessage = '';

  // ===== FORM FIELDS (INTENTIONALLY EMPTY) =====
  name = '';
  email = '';
  phone = '';
  permAddress = '';
  currAddress = '';
  noteToAdmin = '';

  // ===== FILES =====
  photoFile: File | null = null;
  aadharFile: File | null = null;
  chequeBookFile: File | null = null;

  managerCode = '';

  constructor(private managerService: ManagerService) {}

  ngOnInit(): void {
    // ✅ GET LOGGED-IN MANAGER CODE
    this.managerCode = sessionStorage.getItem('managerCode') || '';

    // ✅ FETCH DATA ONLY FOR HEADER (NOT FORM)
    if (this.managerCode) {
      this.managerService.getManagerByCode(this.managerCode).subscribe({
        next: (res: any) => {
          this.manager.name = res.name;
          this.manager.email = res.email;
          this.manager.photo = res.photo;
        },
        error: () => {
          console.warn('Header data load failed');
        },
      });
    }
  }

  onPhotoSelect(event: any) {
    this.photoFile = event.target.files[0];
  }

  onAadharSelect(event: any) {
    this.aadharFile = event.target.files[0];
  }

  onChequeBookSelect(event: any) {
    this.chequeBookFile = event.target.files[0];
  }

  submitForm() {
    if (!this.managerCode) {
      this.showError('Manager code not found');
      return;
    }

    const requestPayload = {
      name: this.name,
      email: this.email,
      phone: this.phone,
      permanentAddress: this.permAddress,
      currentAddress: this.currAddress,
      noteToAdmin: this.noteToAdmin,
    };

    const fd = new FormData();

    fd.append(
      'request',
      new Blob([JSON.stringify(requestPayload)], {
        type: 'application/json',
      })
    );

    if (this.photoFile) fd.append('photo', this.photoFile);
    if (this.aadharFile) fd.append('aadhar', this.aadharFile);
    if (this.chequeBookFile) fd.append('chequeBook', this.chequeBookFile);

    this.managerService.updateManagerDetails(this.managerCode, fd).subscribe({
      next: (res: string) => {
        this.showSuccess(res);
      },
      error: (err) => {
        if (err?.error?.message) {
          this.showError(err.error.message);
        } else {
          this.showError();
        }
      },
    });
  }

  showSuccess(message?: string) {
    this.popupTitle = 'Success';
    this.popupMessage = message || 'Your request is successfully sent';
    this.openPopup();
  }

  showError(message?: string) {
    this.popupTitle = 'Oops!';
    this.popupMessage = message || 'Request not sent. Please try again later.';
    this.openPopup();
  }

  openPopup() {
    this.showPopup = true;
    setTimeout(() => (this.showPopup = false), 20000);
  }
  closePopup() {
    this.showPopup = false;
  }
}
