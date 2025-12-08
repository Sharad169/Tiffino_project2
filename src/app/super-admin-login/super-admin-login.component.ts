import { Component } from '@angular/core';
import { AdminService } from '../admin.service';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-super-admin-login',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './super-admin-login.component.html',
  styleUrl: './super-admin-login.component.css'
})
export class SuperAdminLoginComponent {

    email = '';
  password = '';

  constructor(private api: AdminService) {}

  onLogin() {
    this.api.login(this.email, this.password).subscribe({
      next: (res) => {
        console.log('✅ Login Success:', res);
        alert('Login Successful!');
      },
      error: (err) => {
        console.error('❌ Login Failed:', err);
        alert('Invalid email or password');
      },
    });
  }

}
