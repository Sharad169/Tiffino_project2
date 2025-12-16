import { Component } from '@angular/core';
import { ManagerService } from '../service/manager.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-manager-login',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './manager-login.component.html',
  styleUrl: './manager-login.component.css'
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
      .ManagerLogin(managerCode, this.password, this.tempPass)
      .subscribe({
        next: (res) => {
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
