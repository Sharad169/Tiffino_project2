import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ManagerService } from '../service/manager.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-manager-login',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './manager-login.component.html',
  styleUrls: ['./manager-login.component.css'],
})
export class ManagerLoginComponent {
  email: string = ''; // actually managerCode
  password: string = '';
  tempPass: string = ''; // optional (ACTIVE manager)

  constructor(private managerService: ManagerService ,   private route: Router) {}

  loginUser(): void {
    if (!this.email || !this.password) {
      alert('Please enter employee code and password');
      return;
    }

    const managerCode = this.email;

    this.managerService
      .login(managerCode, this.password, this.tempPass)
      .subscribe({
        next: (res: any) => {
          // ✅ CLEAR OLD DATA FIRST
          sessionStorage.clear();

          // ✅ STORE ONLY MANAGER DATA
          sessionStorage.setItem('token', res.token);
          sessionStorage.setItem('managerCode', res.managerCode);
          sessionStorage.setItem('role', 'MANAGER');

          alert(res.message || 'Manager login successful');
          this.route.navigate(['/manager-yourdetailspage']);
          

        },
        error: (err: any) => {
          alert(err?.error?.message || 'Invalid login details');
        },
      });
  }
}