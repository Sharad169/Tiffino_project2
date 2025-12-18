import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { AuthService } from '../service/auth.service';

@Component({
  selector: 'app-chef-setpassword',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './chef-setpassword.component.html',
  styleUrls: ['./chef-setpassword.component.css'],
})
export class ChefSetpasswordComponent {

  // ✅ names must match HTML
  email: string = '';          // used as ChefCode
  tempPassword: string = '';   // temporary password
  newPassword: string = '';    // not sent now (kept for future)

  constructor(
    private authService: AuthService,
    private router: Router
  ) {}

submitPassword() {
  debugger;

  if (!this.email || !this.tempPassword || !this.newPassword) {
    alert('All fields are required');
    return;
  }

  this.authService.chefSetPassword({
    ChefCode: this.email,
    Password: this.newPassword,
    temp: this.tempPassword
  })
  .subscribe({
    next: (res: any) => {
      console.log('Success:', res);
      alert('Password created successfully!');
      this.router.navigate(['/chef-login']);
    },
    error: (err: any) => {
      console.error(err);
      alert('Invalid details. Please check chef code / temporary password.');
    }
  });
}

}
