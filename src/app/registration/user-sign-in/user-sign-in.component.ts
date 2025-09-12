import { Component } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { RouterLink, RouterModule } from '@angular/router';
import { AuthService } from '../../service/auth.service';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-user-sign-in',
  standalone: true,
  imports: [RouterModule, RouterLink, FormsModule, ReactiveFormsModule, CommonModule],
  templateUrl: './user-sign-in.component.html',
  styleUrls: ['./user-sign-in.component.css'],
})
export class UserSignInComponent {
   signupForm!: FormGroup;
    submitted = false;

  constructor(private fb: FormBuilder, private api : AuthService, private route: Router) {}

  ngOnInit(): void {
    this.signupForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      dateOfBirth: ['', Validators.required],
      phone: ['', [Validators.required, Validators.pattern(/^[0-9]{10}$/)]]
      // otp: ['', Validators.required]
    });
  }


  get f() {
    return this.signupForm.controls;
  }

  onSubmit(): void {
    this.submitted = true;

    if (this.signupForm.invalid) {
      return;
    }

    // create payload exactly how backend expects
    const formValue = this.signupForm.value;

    const payload = {
      "name": formValue.name,
      "email": formValue.email,
      "phone": formValue.phone,
      "dateOfBirth": formValue.dateOfBirth   // map dateOfBirth correctly
    };

    // this.api.signup(payload, { responseType: 'text' as 'json' }).subscribe({
    //   next: (res) => {
    //     console.log('Signup successful:', res);
    //     this.route.navigate(['/home']);
    //   },
    //   error: (err) => {
    //     console.error('Signup error:', err);
    //   }
    // });

      this.api.signup(payload, { responseType: 'text' as 'json' }).subscribe({
  next: () => {
    // console.log(res);
    
    console.log("Signup successful");
    this.route.navigate(['/home']);
  },
  error: (err) => {
    console.error("Signup failed", err);
  }
});

  }

  onSendOtp(): void {
    console.log('Send OTP clicked', this.signupForm.get('email')?.value);
  }





}
