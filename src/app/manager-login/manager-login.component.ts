import { Component } from '@angular/core';
import { ManagerService } from '../manager.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-manager-login',
  standalone: true,
  imports: [FormsModule], // ✅ ADD THIS
  templateUrl: './manager-login.component.html',
  styleUrls: ['./manager-login.component.css'],
})
export class ManagerLoginComponent {
  email: string = '';
  password: string = '';
  tempPass: string = '';

  constructor(private managerService: ManagerService) {}

  loginUser() {
    alert('Button clicked!');

    if (!this.email || !this.password) {
      alert('Please enter email and password');
      return;
    }

    const managerCode = this.email;

    this.managerService
      .login(managerCode, this.password, this.tempPass)
      .subscribe({
        next: (res) => {
          debugger;
          console.log('Login success:', res);
          alert('Login successful');
        },
        error: (err) => {
          console.error('Login error:', err);
          alert('Invalid login details');
        },
      });
  }
}
