import { Component } from '@angular/core';
import { ChefSidebarComponent } from '../chef-sidebar/chef-sidebar.component';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-chef-applyleave',
  standalone: true,
  imports: [ChefSidebarComponent, FormsModule, CommonModule],
  templateUrl: './chef-applyleave.component.html',
  styleUrls: ['./chef-applyleave.component.css'],
})
export class ChefApplyleaveComponent {
  showLeaveType = false;

  leaveType: string | null = null;
  fromDate: string | null = null;
  toDate: string | null = null;

  contactDetails: string = '';
  reasonText: string = '';

  toggleLeaveTypeDropdown() {
    this.showLeaveType = !this.showLeaveType;
  }

  selectLeaveType(type: string) {
    this.leaveType = type;
    this.showLeaveType = false;
  }

  openFromDatePicker() {
    const picker = document.getElementById(
      'fromPicker'
    ) as HTMLInputElement | null;
    picker?.showPicker();
  }

  setFromDate(event: Event) {
    const input = event.target as HTMLInputElement;
    this.fromDate = input.value;
  }

  openToDatePicker() {
    const picker = document.getElementById(
      'toPicker'
    ) as HTMLInputElement | null;
    picker?.showPicker();
  }

  setToDate(event: Event) {
    const input = event.target as HTMLInputElement;
    this.toDate = input.value;
  }

  onContactInput(event: any) {
    this.contactDetails = event.target.value;
  }

  // REASON BOX
  onReasonFocus() {
    if (this.reasonText === '' || this.reasonText === 'Reason') {
      this.reasonText = '';
    }
  }

  onReasonInput(event: any) {
    this.reasonText = event.target.value;
  }

  // SUBMIT
  submitLeave() {
    if (!this.leaveType) {
      alert('Please select Leave Type');
      return;
    }
    if (!this.fromDate) {
      alert('Please select From Date');
      return;
    }
    if (!this.toDate) {
      alert('Please select To Date');
      return;
    }
    if (!this.contactDetails.trim()) {
      alert('Please enter Contact Details');
      return;
    }
    if (!this.reasonText.trim()) {
      alert('Please enter Reason');
      return;
    }

    const leaveData = {
      leaveType: this.leaveType,
      fromDate: this.fromDate,
      toDate: this.toDate,
      contactDetails: this.contactDetails,
      reason: this.reasonText,
    };

    console.log('Leave Submitted:', leaveData);

    alert(
      `Leave Submitted Successfully\n\n` +
        `Type: ${this.leaveType}\n` +
        `From: ${this.fromDate}\n` +
        `To: ${this.toDate}\n` +
        `Contact: ${this.contactDetails}\n` +
        `Reason: ${this.reasonText}`
    );
  }
}