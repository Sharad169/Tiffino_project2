import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-chef-login',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './chef-login.component.html',
  styleUrl: './chef-login.component.css'
})
export class ChefLoginComponent {

  loginForm: FormGroup;
  loading = false;
  errorMessage = '';

  private apiUrl = 'http://localhost:8081/api/admins/chef-login';

  constructor(
    private fb: FormBuilder,
    private http: HttpClient,
    private router: Router
  ) {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required]
    });
  }

  onLogin(): void {
    if (this.loginForm.invalid) {
      this.loginForm.markAllAsTouched();
      return;
    }

    this.loading = true;
    this.errorMessage = '';

    this.http.post<any>(this.apiUrl, this.loginForm.value).subscribe({
      next: (res) => {
        this.loading = false;

        // 🔐 Save token if backend sends it
        if (res?.token) {
          localStorage.setItem('chefToken', res.token);
        }

        // 👨‍🍳 Save chef data
        if (res?.data) {
          localStorage.setItem('chefData', JSON.stringify(res.data));
        }

        // ✅ Redirect to dashboard
        this.router.navigate(['/chef-dashboard']);
      },
      error: (err) => {
        this.loading = false;
        this.errorMessage =
          err?.error?.message || 'Invalid email or password';
      }
    });
  }
}
