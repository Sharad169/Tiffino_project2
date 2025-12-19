import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { SuperadminSidebarComponent } from '../superadmin-sidebar/superadmin-sidebar.component';
import { CommonModule } from '@angular/common';
import { AbstractControl, FormBuilder, FormGroup, ReactiveFormsModule, ValidationErrors, ValidatorFn, Validators } from '@angular/forms';
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
    chequeBook: { uploaded: false, file: null, name: '' }
  };

  constructor(
    private router: Router,
    private fb: FormBuilder,
    public api: AdminService
  ) { }

  ngOnInit(): void {
    this.chefForm = this.fb.group({
      name: ['', [
  Validators.required,
  Validators.pattern(/^[A-Za-z]+$/)
]],
     email: ['', [
  Validators.required,
  Validators.email,
  Validators.pattern(/^\S+@\S+\.\S+$/) // optional strict check: no spaces
]],
      dateOfBirth: ['', [
  Validators.required,
  Validators.pattern(/^(19|20)\d{2}-(0[1-9]|1[0-2])-(0[1-9]|[12]\d|3[01])$/),
  this.minimumAgeValidator(18)
]],
      phone: ['', [
  Validators.required,
  Validators.pattern(/^[6-9]\d{9}$/)
]],
      ifsc: ['', [
  Validators.required,
  Validators.pattern(/^[A-Z]{4}0[A-Z0-9]{6}$/)
]],
      kitchenCode: ['', [
  Validators.required,
  Validators.pattern(/^[A-Za-z0-9]+$/)
]],

    bankAccountNum: ['', [
  Validators.required,
  Validators.pattern(/^\d{9,18}$/)
]],
     specialization: ['', [
  Validators.required,
  Validators.minLength(5),
  Validators.maxLength(100),
  Validators.pattern(/^[a-zA-Z0-9\s,.-]+$/)
]],
      permanentAddress: ['', [
  Validators.required,
  Validators.minLength(10),
  Validators.maxLength(200),
  Validators.pattern(/^[a-zA-Z0-9\s,.-]+$/)
]],
      currentAddress: ['', [
  Validators.required,
  Validators.minLength(10),
  Validators.maxLength(200),
  Validators.pattern(/^[a-zA-Z0-9\s,.-]+$/)
]],
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
      chequeBook: 'chequeBook'

    };
    // ✅ Append files

    Object.keys(this.uploadedFiles).forEach(key => {
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
        Object.keys(this.uploadedFiles).forEach(k => {
          this.uploadedFiles[k] = { uploaded: false, file: null, name: '' };
        });
      },

      error: (err) => {
        console.error('❌ Error registering chef:', err);
        alert('Failed to register chef. Please try again.');
      },
    });
  }

  minimumAgeValidator(minAge: number): ValidatorFn {
    return (control: AbstractControl): ValidationErrors | null => {
      const value = control.value;
      if (!value) return null;

      const dob = new Date(value);
      if (isNaN(dob.getTime())) return { invalidDate: true };

      const today = new Date();
      let age = today.getFullYear() - dob.getFullYear();
      const monthDiff = today.getMonth() - dob.getMonth();
      if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < dob.getDate())) {
        age--;
      }

      return age >= minAge ? null : { minAge: { requiredAge: minAge, actualAge: age } };
    };
  }
}

