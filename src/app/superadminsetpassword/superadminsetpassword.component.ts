import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-superadminsetpassword',
  standalone: true,
  imports: [ ReactiveFormsModule, CommonModule, ],
  templateUrl: './superadminsetpassword.component.html',
  styleUrl: './superadminsetpassword.component.css'
})
export class SuperadminsetpasswordComponent implements OnInit {
  passwordForm!: FormGroup;

    constructor(private fb: FormBuilder) {}


ngOnInit() {
    this.passwordForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      oldPassword: ['', Validators.required],
      newPassword: ['', Validators.required],
    });
  }

   onSubmit() {
    if (this.passwordForm.valid) {
      console.log(this.passwordForm.value);
     
    }
  }

    sendPassword() {
    // Logic for sending password
  }
}
