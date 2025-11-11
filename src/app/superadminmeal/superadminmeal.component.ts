import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Sidebar2Component } from '../sidebar2/sidebar2.component';

@Component({
  selector: 'app-superadminmeal',
  standalone: true,
  imports: [CommonModule, FormsModule, Sidebar2Component],
  templateUrl: './superadminmeal.component.html',
  styleUrls: ['./superadminmeal.component.css'],
})
export class SuperadminmealComponent {
  showMealForm = false;
  showCuisineForm = false;
  activeForm: string = ''; // NEW: track which button is active

  toggleForm(type: string) {
    this.activeForm = type;

    if (type === 'meal') {
      this.showMealForm = true;
      this.showCuisineForm = false;
    } else if (type === 'cuisine') {
      this.showCuisineForm = true;
      this.showMealForm = false;
    }
  }
}
