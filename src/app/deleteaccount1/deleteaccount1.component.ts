import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { SidebarComponent } from '../sidebar/sidebar.component';

@Component({
  selector: 'app-deleteaccount1', // ✅ unique selector name
  standalone: true,
  imports: [RouterModule, CommonModule, FormsModule, SidebarComponent],
  templateUrl: './deleteaccount1.component.html', // ✅ points to your current HTML
  styleUrls: ['./deleteaccount1.component.css'],
})
export class Deleteaccount1Component {
  constructor(private router: Router) {}

  selectedReason: string = '';
  userText: string = '';
  showConfirmPage: boolean = false; // ✅ this line fixes your error

  get isOtherSelected(): boolean {
    return this.selectedReason === 'Other';
  }

  onReasonSelect(reasonValue: string): void {
    this.selectedReason = reasonValue;
  }

  onSubmit(): void {
    if (!this.selectedReason) {
      alert('Please select a reason before proceeding.');
      return;
    }

    if (this.isOtherSelected && !this.userText.trim()) {
      alert('Please enter a reason before proceeding.');
      return;
    }

    this.showConfirmPage = true;
  }

  confirmDelete(confirmed: boolean): void {
    if (confirmed) {
      alert('Your account has been deleted successfully.');
      this.router.navigate(['/profile']);
    } else {
      // ✅ back to reason selection
      this.showConfirmPage = false;
    }
  }
}
