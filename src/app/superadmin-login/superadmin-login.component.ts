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

      // ✅ Check if token exists in response
      if (res && res.token) {
        sessionStorage.setItem('token', res.token); // ✅ Store token
        console.log('Token stored in sessionStorage:', res.token);
      } else {
        console.warn('No token received from server');
      }

      alert('Login successful!');
      this.router.navigate(['/superadmincloudkitchen']); // ✅ Redirect to home page
    },
    error: (err) => {
      console.error('Login failed:', err);
      alert('Invalid email or password');
    }
  });
}

   navigateTo(route: string) {
    this.router.navigate([route]);
  }

}
