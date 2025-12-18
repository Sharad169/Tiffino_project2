import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { SuperadminSidebarComponent } from '../superadmin-sidebar/superadmin-sidebar.component';
import { CommonModule } from '@angular/common';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { AdminService } from '../admin.service';
@Component({
  selector: 'app-superadminchef',
  standalone: true,
  imports: [SuperadminSidebarComponent, CommonModule, ReactiveFormsModule],
  templateUrl: './superadminchef.component.html',
  styleUrls: ['./superadminchef.component.css'],
})
export class SuperadminchefComponent {
  chefForm!: FormGroup;
  uploadedFiles: any = {
    photo: { uploaded: false, file: null, name: '' },
    aadhar: { uploaded: false, file: null, name: '' },
    panCard: { uploaded: false, file: null, name: '' }, // we'll map this to "pan"
    chequeBook: { uploaded: false, file: null, name: '' },
  };

  constructor(
    private router: Router,
    private fb: FormBuilder,
    public api: AdminService
  ) {}

  ngOnInit(): void {
    this.chefForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      dateOfBirth: ['', Validators.required],
      phone: ['', Validators.required],
      ifsc: ['', Validators.required],
      kitchenCode: ['', Validators.required],
      bankAccountNum: ['', Validators.required],
      specialization: ['', Validators.required],
      permanentAddress: ['', Validators.required],
      currentAddress: ['', Validators.required],
    });
  }

  onRoleChangeCustom(role: string) {
    if (role === 'manager') this.router.navigate(['/managerinfo']);
    else if (role === 'chef') this.router.navigate(['/superadminchef']);
    else if (role === 'delivery-partner')
      this.router.navigate(['/superadmindelpartner']);
  }

  onFileSelected(event: any, field: string) {
    const file = event.target.files[0];
    if (!file) return;
    const allowedTypes = ['application/pdf', 'image/jpeg', 'image/png'];
    if (allowedTypes.includes(file.type)) {
      this.uploadedFiles[field] = { uploaded: true, file, name: file.name };
    } else {
      alert('Please upload only PDF or image files (jpg/png).');
      this.uploadedFiles[field] = { uploaded: false, file: null, name: '' };
    }
  }

  onSubmit(): void {
    if (this.chefForm.invalid) {
      alert('Please fill out all required fields before submitting.');
      return;
    }
    const formData = new FormData();
    // ✅ Append JSON data as Blob
    const chefData = this.chefForm.value;
    formData.append(
      'chef',
      new Blob([JSON.stringify(chefData)], { type: 'application/json' })
    );
    // ✅ Correct key mapping for backend
    const keyMapping: any = {
      photo: 'photo',
      aadhar: 'aadhar',
      panCard: 'pan', // backend expects 'pan', not 'panCard'
      chequeBook: 'chequeBook',
    };
    // ✅ Append files

    Object.keys(this.uploadedFiles).forEach((key) => {
      const fileData = this.uploadedFiles[key];
      if (fileData.file) {
        formData.append(keyMapping[key], fileData.file);
      }
    });

    // ✅ Send request
    this.api.addChef(formData).subscribe({
      next: (res) => {
        console.log('✅ Chef registered successfully:', res);
        alert('Chef registered successfully!');
        this.chefForm.reset();
        Object.keys(this.uploadedFiles).forEach((k) => {
          this.uploadedFiles[k] = { uploaded: false, file: null, name: '' };
        });
      },

      error: (err) => {
        console.error('❌ Error registering chef:', err);
        alert('Failed to register chef. Please try again.');
      },
    });
  }
}