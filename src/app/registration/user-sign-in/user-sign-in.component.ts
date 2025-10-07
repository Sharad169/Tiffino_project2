import { Component } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { RouterLink, RouterModule } from '@angular/router';
import { AuthService } from '../../service/auth.service';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { log } from 'console';

@Component({
  selector: 'app-user-sign-in',
  standalone: true,
  imports: [
    RouterModule,
    // RouterLink,
    FormsModule,
    ReactiveFormsModule,
    CommonModule,
  ],
  templateUrl: './user-sign-in.component.html',
  styleUrls: ['./user-sign-in.component.css'],
})
export class UserSignInComponent {
  signupForm!: FormGroup;
  submitted = false;
  hide = true;
  otpSent = false;
  message = '';
  loginForm!: FormGroup;

  constructor(
    private fb: FormBuilder,
    private api: AuthService,
    private route: Router
  ) {}

  ngOnInit(): void {
    this.signupForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      dateOfBirth: ['', Validators.required],
      phone: ['', [Validators.required, Validators.pattern(/^[0-9]{10}$/)]],
      // otp: ['', Validators.required]
    });

    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
    });
  }

  get f() {
    return this.signupForm.controls;
  }

  onSubmit(): void {
    debugger
    this.submitted = true;

    if (this.signupForm.invalid) {
      return;
    }

    // create payload exactly how backend expects
    const formValue = this.signupForm.value;

    const payload = {
      name: formValue.name,
      email: formValue.email,
      phone: formValue.phone,
      dateOfBirth: formValue.dateOfBirth, // map dateOfBirth correctly
    };

    this.api.signup(payload).subscribe({
      next: (res) => {

        console.log(res);
        

        const jwtToken = (res as any).token; // Adjust based on actual response structure
        if (jwtToken) {
          sessionStorage.setItem('token', jwtToken);
        }
        
         sessionStorage.setItem('emailForOtp', payload.email);
         sessionStorage.setItem('name', payload.name);
         
        console.log('Signup successful:', res);
        this.route.navigate(['/verification-otp']);
      },
      error: (err) => {
        console.error('Signup error:', err);
      },
    });
  }


  sendOtp(): void {
    const email = this.loginForm.get('email')?.value;

    this.api.sendOtp(email).subscribe({
      next: (res) => {
        console.log('API Response:', res); // Log the response to be sure
        console.log(res.token); // Log the token specifically

        // add OTP control dynamically
        if (!this.loginForm.get('otp')) {
          this.loginForm.addControl(
            'otp',
            this.fb.control('', Validators.required)
          );
        }

        // Store the token from the response
        if (res.token) {
          localStorage.setItem('accessToken', res.token); 
        }
        
        // Store other data from the response for later use if needed
        if (res.role) {
          localStorage.setItem('userRole', res.role);
        }
        if (res.status) {
          localStorage.setItem('userStatus', res.status);
        }
        
        this.otpSent = true;
      },
      error: (err) => {
        alert('Invalid Email. Please try again.');
        console.error('Error sending OTP', err);
      },
    });
  }

  verifyOtp(): void {
    const payload = {
      email: this.loginForm.get('email')?.value,
      otp: this.loginForm.get('otp')?.value,
    };

    this.api.verifyOtp(payload).subscribe({
      next: (res) => {
        const jwtToken = (res as any).token; // Adjust based on actual response structure
        if (jwtToken) {
          sessionStorage.setItem('token', jwtToken);
        }
        console.log('OTP Verified:', res);
        this.route.navigate(['/home']);
      },
      error: (err) => {
        // alert('Invalid mail. Please try again.');
        console.error('Error verifying OTP', err);
      },
    });
  }


  showLogin() {
    this.hide = !this.hide;
  }

  home() { 
    
     }
}
