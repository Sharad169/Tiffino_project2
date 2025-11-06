import { Component } from '@angular/core';
import { AdminService } from '../admin.service';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-superadmin-login',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, FormsModule],
  templateUrl: './superadmin-login.component.html',
  styleUrl: './superadmin-login.component.css'
})
export class SuperadminLoginComponent {


   email = '';
  password = '';

  constructor(private loginService: AdminService, public router: Router ) {}

  onLogin() {
    if (!this.email || !this.password) {
      alert('Please enter both email and password');
      return;
    }

    this.loginService.login(this.email, this.password).subscribe({
      next: (res) => {
        console.log('Login successful:', res);
        alert('Login successful!');
        this.router.navigate(['/home']);

          if (res.token) {
          localStorage.setItem('accessToken', res.token); 
        }
        // You can store token or redirect here
        // localStorage.setItem('adminData', JSON.stringify(res));
      },
      error: (err) => {
        console.error('Login failed:', err);
        alert('Invalid email or password');
      }
    });
  }
}
