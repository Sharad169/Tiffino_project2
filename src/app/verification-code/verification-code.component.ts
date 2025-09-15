
import { CommonModule,isPlatformBrowser } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, Inject, PLATFORM_ID } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router, RouterLink, RouterModule } from '@angular/router';



@Component({
  selector: 'app-verification-code',
  standalone: true,
    imports: [RouterModule, RouterLink, FormsModule, ReactiveFormsModule, CommonModule],
  templateUrl: './verification-code.component.html',
  styleUrls: ['./verification-code.component.css']
})
export class VerificationCodeComponent {
  otpForm!: FormGroup;
  email: string = '';

  constructor(private fb: FormBuilder, private http: HttpClient, private route: Router,   @Inject(PLATFORM_ID) private platformId: Object) {}

  ngOnInit() {
    // Form initialize ngOnInit me
    this.otpForm = this.fb.group({
      otp: ['', [Validators.required, Validators.minLength(4), Validators.maxLength(6)]]
    });

   if (isPlatformBrowser(this.platformId)) {
    const storedEmail = sessionStorage.getItem('emailForOtp');
    if (storedEmail) {
      this.email = storedEmail;
    } else {
      this.route.navigate(['/signup']);
    }
  }
  }

  verifyOtp() {
    if (this.otpForm.valid) {
      const payload = {
        email: this.email,
        otp: this.otpForm.value.otp
      };

      this.http.post('http://localhost:8080/api/auth/verify-otp', payload)
        .subscribe({
          next: (res) => {
            console.log('OTP verified successfully');
            this.route.navigate(['/onboarding']);
          },
          error: (err) => console.error('OTP verification failed', err)
        });
    }
  }
 }
