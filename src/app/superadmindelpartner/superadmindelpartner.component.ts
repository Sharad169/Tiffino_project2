import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { SuperadminSidebarComponent } from '../superadmin-sidebar/superadmin-sidebar.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-superadmindelpartner',
  standalone: true,
  imports: [SuperadminSidebarComponent, ReactiveFormsModule, CommonModule],
  templateUrl: './superadmindelpartner.component.html',
  styleUrls: ['./superadmindelpartner.component.css'],
})
export class SuperadmindelpartnerComponent implements OnInit {
  delPartnerForm!: FormGroup;
  apiUrl = 'http://localhost:8081/api/admins/delivery-partner';

  uploadedFiles: any = {
    photo: { uploaded: false, file: null, name: '' },
    aadhar: { uploaded: false, file: null, name: '' },
    panCard: { uploaded: false, file: null, name: '' },
    chequeBook: { uploaded: false, file: null, name: '' },
    vehicleInsurance: { uploaded: false, file: null, name: '' },
    drivingLicense: { uploaded: false, file: null, name: '' },
  };

  constructor(
    private router: Router,
    private fb: FormBuilder,
    private http: HttpClient
  ) {}

  ngOnInit(): void {
this.delPartnerForm = this.fb.group({
  name: [''],
  email: [''],
  phone: [''],
  dateOfBirth: [''],
  kitchenCode: [''],
  bankAccountNum: [''],
  vehicleNumber: [''],  // added field
  ifsc: [''],                  // fixed
  permanentAddress: [''],      // fixed
  currentAddress: [''],        // fixed

  aadhar: [null],
  panCard: [null],
  vehicleInsurance: [null],
  drivingLicense: [null],
  photo: [null],
  chequeBook: [null],
});
  }

  // 📁 Handle file input
  onFileSelected(event: any, fieldName: string): void {
    const file = event.target.files[0];
    if (file) {
      this.uploadedFiles[fieldName] = {
        uploaded: true,
        file,
        name: file.name,
      };
      this.delPartnerForm.patchValue({ [fieldName]: file });
      this.delPartnerForm.get(fieldName)?.updateValueAndValidity();
    }
  }

  // 🚀 Submit form with token + FormData + JSON
//  onSubmit(): void {
//   if (this.delPartnerForm.invalid) {
//     alert('Please fill out all required fields before submitting.');
//     return;
//   }

//   const raw = this.delPartnerForm.value;

//   // ⭐ FIX EMPTY FIELD ISSUE
//   const DelInfo = {
//     ...raw,
//     permanentAddress: raw.permanentAddress?.trim() || '',
//     currentAddress: raw.currentAddress?.trim() || '',
//     ifsc: raw.ifsc?.trim() || ''
//   };

//   console.log("📌 Sending JSON:", DelInfo);

//   const formData = new FormData();

//   // Append JSON as Blob
//   formData.append(
//     'DelInfo',
//     new Blob([JSON.stringify(DelInfo)], { type: 'application/json' })
//   );

//   // ⭐ Correct file key mapping
//  const keyMapping: any = {
//   photo: 'photo',
//   aadhar: 'aadhar',
//   panCard: 'pan',
//   chequeBook: 'chequeBook',
//   vehicleInsurance: 'insurance',
//   drivingLicense: 'license',   // ⭐⭐ MAIN FIX ⭐⭐
// };

//   // Append files properly
//   Object.keys(this.uploadedFiles).forEach((key) => {
//     const fileData = this.uploadedFiles[key];
//     if (fileData.file) {
//       formData.append(keyMapping[key] || key, fileData.file);
//     }
//   });

//   // Token
//   const token = sessionStorage.getItem('token');
//   if (!token) {
//     alert('User not authenticated! Please log in again.');
//     return;
//   }

//   const headers = new HttpHeaders({
//     Authorization: `Bearer ${token}`,
//   });

//   console.log("📎 Files:", this.uploadedFiles);

//   // API call
//   this.http.post(this.apiUrl, formData, { headers }).subscribe({
//     next: (res) => {
//       console.log("✅ Registered Successfully:", res);
//       alert('Delivery Partner registered successfully!');
//       this.delPartnerForm.reset();

//       Object.keys(this.uploadedFiles).forEach((k) => {
//         this.uploadedFiles[k] = { uploaded: false, file: null, name: '' };
//       });
//     },
//     error: (err) => {
//       console.error("❌ Error:", err);
//       alert('Failed to register Delivery Partner. Check console.');
//     }
//   });
// }

onSubmit(): void {

  if (this.delPartnerForm.invalid) {

    alert('Please fill out all required fields before submitting.');

    return;

  }
 
  const DelInfo = this.delPartnerForm.value;
 
  const formData = new FormData();

  formData.append(

    'DelInfo',

    new Blob([JSON.stringify(DelInfo)], { type: 'application/json' })

  );
 
  const keyMapping: any = {
    
    photo: 'photo',

    aadhar: 'aadhar',

    panCard: 'pan',

    chequeBook: 'chequeBook',

    vehicleInsurance: 'insurance',

    drivingLicense: 'license',

  };
 
  Object.keys(this.uploadedFiles).forEach((key) => {

    const file = this.uploadedFiles[key].file;

    if (file) {

      formData.append(keyMapping[key], file);

    }

  });
 
  const headers = new HttpHeaders({

    Authorization: `Bearer ${sessionStorage.getItem('token')}`,

  });
 
  this.http.post(this.apiUrl, formData, { headers }).subscribe({

    next: () => alert('Delivery Partner registered successfully!'),

    error: () => alert('Failed to register Delivery Partner.'),

  });

}

 
 
// onSubmit(): void {
//   if (this.delPartnerForm.invalid) {
//     alert('Please fill out all required fields before submitting.');
//     return;
//   }

//   const DelInfo = this.delPartnerForm.value;

//   const formData = new FormData();
//   formData.append(
//     'DelInfo',
//     new Blob([JSON.stringify(DelInfo)], { type: 'application/json' })
//   );

//   const keyMapping: any = {
//     photo: 'photo',
//     aadhar: 'aadhar',
//     panCard: 'pan',
//     chequeBook: 'chequeBook',
//     vehicleInsurance: 'insurance',
//     drivingLicense: 'license',
//   };

//   Object.keys(this.uploadedFiles).forEach((key) => {
//     const file = this.uploadedFiles[key].file;
//     if (file) {
//       formData.append(keyMapping[key], file);
//     }
//   });

//   const headers = new HttpHeaders({
//     Authorization: `Bearer ${sessionStorage.getItem('token')}`,
//   });

//   this.http.post(this.apiUrl, formData, { headers }).subscribe({
//     next: (res) => {
//       alert('Delivery Partner registered successfully!');
//       this.delPartnerForm.reset();
//     },
//     error: (err) => {
//       console.error(err);
//       alert('Failed to register Delivery Partner.');
//     },
//   });
// }




  // 🔁 Role Navigation
  onRoleChangeCustom(role: string) {
    if (role === 'manager') {
      this.router.navigate(['/managerinfo']);
    } else if (role === 'chef') {
      this.router.navigate(['/superadminchef']);
    } else if (role === 'delivery-partner') {
      this.router.navigate(['/superadmindelpartner']);
    }
  }
}
