import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ManagerService } from '../manager.service';

@Component({
  selector: 'app-superadminsetpasssword',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './superadminsetpasssword.component.html',
  styleUrls: ['./superadminsetpasssword.component.css'],
})
export class SuperadminsetpassswordComponent {
  email: string = '';
  oldPassword: string = '';
  tempPass: string = '';

  constructor(private managerService: ManagerService) {}

  submitPassword() {
    // Step 1: Validate Inputs
    if (!this.email || !this.oldPassword || !this.tempPass) {
      alert('All fields are required!');
      return;
    }

    const managerCode = this.email; // Using email as managerCode
    const password = this.oldPassword; // old password
    const tempPass = this.tempPass; // new password (or tempPass from API)

    // Step 2: Call API
    this.managerService.login(managerCode, password, tempPass).subscribe({
      next: (res) => {
        console.log('Success:', res);
        alert('Password Updated Successfully!');
      },
      error: (err) => {
        console.error('Error:', err);
        alert('Invalid details — check managerCode, password or tempPass');
      },
    });
  }
}
