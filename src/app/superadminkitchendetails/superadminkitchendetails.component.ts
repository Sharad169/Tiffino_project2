import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Sidebar2Component } from '../sidebar2/sidebar2.component';

@Component({
  selector: 'app-superadminkitchendetails',
  standalone: true,
  imports: [CommonModule, Sidebar2Component],
  templateUrl: './superadminkitchendetails.component.html',
  styleUrls: ['./superadminkitchendetails.component.css'],
})
export class SuperadminkitchendetailsComponent {
  dropdownOpen = false;
  selectedOption = '';
  amount: string | null = null;

  options = ['Per Month', 'Per Annum', 'Per Quarter'];

  toggleDropdown(event: MouseEvent) {
    // ✅ Toggle dropdown visibility
    this.dropdownOpen = !this.dropdownOpen;
    event.stopPropagation();
  }

  selectOption(option: string, event: MouseEvent) {
    this.selectedOption = option;

    // ✅ Set amount based on selected option
    if (option === 'Per Month') {
      this.amount = '2,00,000';
    } else if (option === 'Per Annum') {
      this.amount = '24,00,000';
    } else if (option === 'Per Quarter') {
      this.amount = '6,00,000';
    }

    // ✅ Hide dropdown immediately after click
    this.dropdownOpen = false;
    event.stopPropagation();
  }

  constructor() {
    // ✅ Close dropdown when clicking outside
    document.addEventListener('click', () => {
      this.dropdownOpen = false;
    });
  }
}
