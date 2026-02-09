import { Component } from '@angular/core';
import { ManagersidebarComponent } from '../managersidebar/managersidebar.component';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-applyleavemanager',
  standalone: true,
  imports: [ManagersidebarComponent, FormsModule, CommonModule],
  templateUrl: './applyleavemanager.component.html',
  styleUrls: ['./applyleavemanager.component.css'],
})
export class ApplyleavemanagerComponent {
  showLeaveType = false;
  leaveType: string | null = null;

  fromDate: string | null = null;
  toDate: string | null = null;
  displayFrom: string | null = null;
  displayTo: string | null = null;

  contactDetails = '';
  reasonText = '';

  /* Calendar */
  calendarOpen = false;
  activeField: 'from' | 'to' | null = null;

  popupTop = 0;
  popupLeft = 0;

  monthNames = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
  ];

  currentYear = new Date().getFullYear();
  currentMonth = new Date().getMonth();
  days: number[] = [];

  constructor() {
    this.generateDays();
  }

  generateDays() {
    const total = new Date(
      this.currentYear,
      this.currentMonth + 1,
      0
    ).getDate();
    this.days = Array.from({ length: total }, (_, i) => i + 1);
  }

  prevMonth() {
    if (this.currentMonth === 0) {
      this.currentMonth = 11;
      this.currentYear--;
    } else this.currentMonth--;
    this.generateDays();
  }

  nextMonth() {
    if (this.currentMonth === 11) {
      this.currentMonth = 0;
      this.currentYear++;
    } else this.currentMonth++;
    this.generateDays();
  }

  prevYear() {
    this.currentYear--;
    this.generateDays();
  }
  nextYear() {
    this.currentYear++;
    this.generateDays();
  }

  openCalendar(field: 'from' | 'to', box: HTMLElement) {
    this.activeField = field;
    this.calendarOpen = true;

    const rect = box.getBoundingClientRect();
    this.popupTop = rect.bottom + window.scrollY + 4;
    this.popupLeft = rect.left + window.scrollX;
  }

  selectCalendarDate(day: number) {
    const mm = String(this.currentMonth + 1).padStart(2, '0');
    const dd = String(day).padStart(2, '0');

    const backend = `${this.currentYear}-${mm}-${dd}`;
    const display = `${dd}/${mm}/${this.currentYear}`;

    if (this.activeField === 'from') {
      this.fromDate = backend;
      this.displayFrom = display;
    } else {
      this.toDate = backend;
      this.displayTo = display;
    }

    this.calendarOpen = false;
  }

  toggleLeaveTypeDropdown() {
    this.showLeaveType = !this.showLeaveType;
  }
  selectLeaveType(t: string) {
    this.leaveType = t;
    this.showLeaveType = false;
  }

  submitLeave() {
    if (!this.leaveType) return alert('Select Leave Type');
    if (!this.fromDate) return alert('Select From Date');
    if (!this.toDate) return alert('Select To Date');
    if (!this.contactDetails) return alert('Enter contact');
    if (!this.reasonText) return alert('Enter reason');

    alert(
      `Leave Submitted\n\nFrom: ${this.displayFrom}\nTo: ${this.displayTo}`
    );
  }
}
