import { Component } from '@angular/core';
import { SuperadminSidebarComponent } from '../superadmin-sidebar/superadmin-sidebar.component';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { AdminService } from '../admin.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-superadmincloudkitchen',
  standalone: true,
  imports: [SuperadminSidebarComponent,CommonModule,ReactiveFormsModule],
  templateUrl: './superadmincloudkitchen.component.html',
  styleUrls: ['./superadmincloudkitchen.component.css']
})
export class SuperadmincloudkitchenComponent {
   addressForm!: FormGroup;

    constructor(private fb: FormBuilder, private api: AdminService, private router: Router) {
    this.addressForm = this.fb.group({
      name: ['', Validators.required],
      city: ['', Validators.required],
      pinCode: ['', [Validators.required, Validators.pattern(/^[0-9]{6}$/)]],
      state: ['', Validators.required],
      region: ['', Validators.required],
      address: ['', Validators.required],
    });
  }


 
   onSubmit() {
    // ✅ Check if form invalid
    if (this.addressForm.invalid) {
      this.addressForm.markAllAsTouched();
      alert('Please fill all required fields');
      return;
    }

    // ✅ Only valid form reaches here
    this.api.addKitchen(this.addressForm.value).subscribe({
      next: (res) => {
        console.log('Kitchen added successfully:', res);
        alert('Kitchen added successfully!');
        this.router.navigate(['/managerinfo']);
      },
      error: (err) => {
        console.error('Error adding kitchen:', err);
        alert('Something went wrong!');
      }
    });
  }

}
