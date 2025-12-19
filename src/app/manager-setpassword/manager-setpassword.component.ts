import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { ManagerService } from '../service/manager.service';
 
@Component({
  selector: 'app-manager-setpassword',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './manager-setpassword.component.html',
  styleUrls: ['./manager-setpassword.component.css'],
})
export class ManagerSetpasswordComponent {
  email: string = ''; // used directly as managerCode
  tempPassword: string = ''; // tempPass
  newPassword: string = ''; // password
 
  constructor(private managerService: ManagerService, private router: Router) {}
 
  submitPassword() {
    if (!this.email || !this.tempPassword || !this.newPassword) {
      alert('All fields are required');
      return;
    }
 
    // IMPORTANT:
    // email value is sent directly as managerCode
    this.managerService
      .login(this.email, this.newPassword, this.tempPassword)
      .subscribe({
        next: (res) => {
          console.log('Success:', res);
 
          if (res?.token) {
            sessionStorage.setItem('token', res.token);
            sessionStorage.setItem('managerCode', res.managerCode);
          }
 
          alert('Password created successfully!');
          this.router.navigate(['/manager-login']);
        },
 
        error: (err) => {
          console.error(err);
          alert('Invalid details. Please check email / temp password.');
        },
      });
  }
}
 
 
