import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Router } from '@angular/router';
import { FormsModule } from '@angular/forms'; // ✅ ADD THIS
import { SidebarComponent } from '../sidebar/sidebar.component';
 
@Component({
  selector: 'app-deleteaccount1',
  standalone: true,
  imports: [RouterModule, CommonModule, FormsModule, SidebarComponent], // ✅ include FormsModule
  templateUrl: './deleteaccount1.component.html',
  styleUrls: ['./deleteaccount1.component.css'],
})
export class Deleteaccount1Component {
  constructor(private router: Router) {}
 
  selectedReason: string = 'Other';
  userText: string = ''; // input model
 
  get isOtherSelected(): boolean {
    return this.selectedReason === 'Other';
  }
 
  onReasonSelect(reasonValue: string): void {
    this.selectedReason = reasonValue;
  }
 
  onSubmit(): void {
    if (this.isOtherSelected && !this.userText.trim()) {
      alert('Please enter a reason before proceeding.');
      return;
    }
 
    const finalReason = this.isOtherSelected
      ? this.userText
      : this.selectedReason;
    console.log('Selected reason:', finalReason);
 
    this.router.navigate(['/deleteaccount2'], {
      state: { reason: finalReason },
    });
  }
}
 
 