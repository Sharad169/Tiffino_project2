import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { AdminService } from '../admin.service';

@Component({
  selector: 'app-superadminsetpassword',
  standalone: true,
  imports: [ ReactiveFormsModule, CommonModule, ],
  templateUrl: './superadminsetpassword.component.html',
  styleUrl: './superadminsetpassword.component.css'
})
export class SuperadminsetpasswordComponent implements OnInit {
  passwordForm!: FormGroup;

    constructor(private fb: FormBuilder, public api : AdminService) {}


ngOnInit() {
    this.passwordForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      oldPassword: ['', Validators.required],
      newPassword: ['', Validators.required],
    });
  }

    onSubmit() {
      const formValue = this.passwordForm.value;

 const payload = {
      email: formValue.email,
      oldPassword: formValue.oldPassword,
      
      newPassword: formValue.newPassword, // map dateOfBirth correctly
    };

    if (this.passwordForm.valid) {
      this.api.loginAdmin(payload).subscribe({
        next: (res) => console.log('✅ Password updated successfully', res),
        error: (err) => console.error('❌ Error updating password', err)
      });
    } else {
      this.passwordForm.markAllAsTouched();
    }
  }

    sendPassword() {
    
  }
}
