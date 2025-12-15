import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { SuperadminSidebarComponent } from '../superadmin-sidebar/superadmin-sidebar.component';
import { AdminService } from '../admin.service';

@Component({
  selector: 'app-managerinfo',
  standalone: true,
  imports: [SuperadminSidebarComponent, CommonModule, ReactiveFormsModule],
  templateUrl: './managerinfo.component.html',
  styleUrls: ['./managerinfo.component.css']

})

export class ManagerinfoComponent {
  managerForm: FormGroup;
  uploadedFiles: any = {
    photo: { uploaded: false, file: null, name: '' },
    aadhar: { uploaded: false, file: null, name: '' },
    pan: { uploaded: false, file: null, name: '' },
    chequeBook: { uploaded: false, file: null, name: '' }
  };

  constructor(
    private fb: FormBuilder, private router: Router,private api: AdminService) {
    this.managerForm = this.fb.group({
      managerName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      dateOfBirth: ['', Validators.required],
      phone: ['', Validators.required],
      kitchenCode: ['', Validators.required],
      bankAccountNum: ['', Validators.required],
      currentAddress: ['', Validators.required],
      permanentAddress: ['', Validators.required],
      ifsc: ['', Validators.required]
    });

  }

  navigateTo(route: string) {
    this.router.navigate([route]);
  }

  // ✅ Accept PDF or image files

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

  // ✅ Submit Form

  onSubmit() {   
     if (this.managerForm.invalid) {
      alert('Please fill all required fields.');
      return;

    }

    // Prepare form data

    const formData = new FormData();
    // Append JSON object as Blob
    const managerData = this.managerForm.value;
    formData.append(
      'manager',
      new Blob([JSON.stringify(managerData)], { type: 'application/json' })
    );

    // Append files

    formData.append('aadhar', this.uploadedFiles.aadhar.file);
    formData.append('pan', this.uploadedFiles.pan.file);
    formData.append('photo', this.uploadedFiles.photo.file);
    formData.append('chequeBook', this.uploadedFiles.chequeBook.file);
    // ✅ Send request
    this.api.addManager(formData).subscribe({
      next: (res) => {
        alert('Manager added successfully!');
                this.managerForm.reset();
        Object.keys(this.uploadedFiles).forEach(key => {
          this.uploadedFiles[key] = { uploaded: false, file: null, name: '' };
        });

      },
      error: (err) => {
               console.error('Error adding manager:', err);
        alert('Failed to add manager. Check console for details.');
      }

    });

  }

}

