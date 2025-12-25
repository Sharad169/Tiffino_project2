import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../service/auth.service';

@Component({
  selector: 'app-chef-login',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './chef-login.component.html',
  styleUrls: ['./chef-login.component.css']
})
export class ChefLoginComponent {

  loginForm!: FormGroup;
  loading = false;
  errorMessage = '';

  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    private router: Router
  ) {
    this.loginForm = this.fb.group({
      ChefCode: ['', Validators.required],
      Password: ['', Validators.required]
    });
  }

  onLogin(): void {
    this.errorMessage = '';

    if (this.loginForm.invalid) {
      this.loginForm.markAllAsTouched();
      return;
    }

    this.loading = true;

    this.authService.chefLogin(this.loginForm.value).subscribe({
      next: (res) => {
        this.loading = false;

        // 🔐 Save token if backend sends it
        if (res?.token) {
          localStorage.setItem('chefToken', res.token);
        }

        // 👨‍🍳 Save chef data if exists
        if (res?.data) {
          localStorage.setItem('chefData', JSON.stringify(res.data));
        }

        // ✅ Redirect
        this.router.navigate(['/chef-dashboard']);
      },
      error: (err) => {
        this.loading = false;
        this.errorMessage =
          err?.error?.message || 'Invalid chef code or password';
      }
    });
  }
}
