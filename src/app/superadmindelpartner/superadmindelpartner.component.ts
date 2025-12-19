import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AbstractControl, FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
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
    name: ['', [
  Validators.required,
  Validators.pattern(/^[A-Za-z]+$/)
]],
 
   email: ['', [
  Validators.required,
  Validators.email
]],
 
    phone: ['', [
  Validators.required,
  Validators.pattern(/^[6-9]\d{9}$/)
]],
 
    dateOfBirth: ['', [
  Validators.required,
  Validators.pattern(/^\d{4}-\d{2}-\d{2}$/),
  this.validDobValidator,
  this.age18Validator
]],
 
    currentAddress: ['', [
  Validators.required,
  Validators.minLength(10),
  Validators.pattern(/^[a-zA-Z0-9\s,./-]+$/)
]],
 
  permanentAddress: ['', [
  Validators.required,
  Validators.minLength(10),
  Validators.pattern(/^[a-zA-Z0-9\s,./-]+$/)
]],

 
    vehicleNumber: ['', [
  Validators.required,
  Validators.pattern(/^[A-Z]{2}[0-9]{1,2}[A-Z]{1,2}[0-9]{4}$/)
]],
 
   bankAccountNum: ['', [
  Validators.required,
  Validators.pattern(/^\d{9,18}$/)
]],
 
   ifsc: ['', [
  Validators.required,
  Validators.pattern(/^[A-Z]{4}0[A-Z0-9]{6}$/)
]],
 
 kitchenCode: ['', [
  Validators.required,
  Validators.pattern(/^[A-Za-z0-9]+$/)
]],
 
    // file placeholders (no validators here)
    aadhar: [null, Validators.required],
    panCard: [null],
    vehicleInsurance: [null],
    drivingLicense: [null],
    photo: [null, Validators.required],
    chequeBook: [null],
  });

  }

  // 📁 Handle file input
  // onFileSelected(event: any, fieldName: string): void {
  //   const file = event.target.files[0];
  //   if (file) {
  //     this.uploadedFiles[fieldName] = {
  //       uploaded: true,
  //       file,
  //       name: file.name,
  //     };
  //     this.delPartnerForm.patchValue({ [fieldName]: file });
  //     this.delPartnerForm.get(fieldName)?.updateValueAndValidity();
  //   }
  // }

onFileSelected(event: any, controlName: string) {
  const file: File = event.target.files[0];

  if (!file) return;

  const allowedTypes = [
    'image/png',
    'image/jpeg',
    'image/jpg',
    'application/pdf'
  ];

  const maxSize = 2 * 1024 * 1024; // 2MB

  // ❌ File type validation
  if (!allowedTypes.includes(file.type)) {
    alert('Only PDF or Image files are allowed');
    event.target.value = '';
    this.delPartnerForm.get(controlName)?.setValue(null);
    return;
  }

  // ❌ File size validation
  if (file.size > maxSize) {
    alert('File size must be less than 2MB');
    event.target.value = '';
    this.delPartnerForm.get(controlName)?.setValue(null);
    return;
  }

  // ✅ Valid file
  this.delPartnerForm.patchValue({
    [controlName]: file
  });

  this.delPartnerForm.get(controlName)?.updateValueAndValidity();

  // UI status
  this.uploadedFiles[controlName] = {
    uploaded: true,
    name: file.name
  };
}




onSubmit(): void {

  console.log(this.delPartnerForm.value);
  
 
  if (this.delPartnerForm.invalid) {

    alert('Please fill all required fields');

    return;

  }
 
  const raw = this.delPartnerForm.value;
 
  // ✅ ONLY DTO FIELDS

  const DelInfo = {

    name: raw.name,

    email: raw.email,

    phone: raw.phone,

    dateOfBirth: raw.dateOfBirth,

    currentAddress: raw.currentAddress,

    permanentAddress: raw.permanentAddress,

    vehicleNumber: raw.vehicleNumber,

    bankAccountNum: raw.bankAccountNum,

    ifsc: raw.ifsc,

    kitchenCode: raw.kitchenCode

  };
 
  const formData = new FormData();
 
  formData.append(

    'DelInfo',

    new Blob([JSON.stringify(DelInfo)], { type: 'application/json' })

  );
 
  const fileMap: any = {

    aadhar: 'aadhar',

    panCard: 'pan',

    photo: 'photo',

    drivingLicense: 'license',

    vehicleInsurance: 'insurance',

    chequeBook: 'chequeBook'

  };
 
  Object.keys(fileMap).forEach(key => {

    const file = this.uploadedFiles[key]?.file;

    if (file) {

      formData.append(fileMap[key], file);

    }

  });
 
  const headers = new HttpHeaders({

    Authorization: `Bearer ${sessionStorage.getItem('token')}`,

  });
 
  this.http.post(this.apiUrl, formData, { headers }).subscribe({

    next: () => alert('Delivery Partner registered successfully'),

    error: (err) => {

      console.error(err);

      alert('Registration failed');

    }

  });

}
 

 
 
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

  validDobValidator(control: AbstractControl) {
  if (!control.value) return null;

  const [year, month, day] = control.value.split('-').map(Number);
  const date = new Date(year, month - 1, day);

  const isValid =
    date.getFullYear() === year &&
    date.getMonth() === month - 1 &&
    date.getDate() === day;

  return isValid ? null : { invalidDate: true };
}

age18Validator(control: AbstractControl) {
  if (!control.value) return null;

  const [year, month, day] = control.value.split('-').map(Number);
  const dob = new Date(year, month - 1, day);
  const today = new Date();

  if (dob > today) {
    return { futureDate: true };
  }

  let age = today.getFullYear() - dob.getFullYear();
  const m = today.getMonth() - dob.getMonth();

  if (m < 0 || (m === 0 && today.getDate() < dob.getDate())) {
    age--;
  }

  return age >= 18 ? null : { underAge: true };
}
}
