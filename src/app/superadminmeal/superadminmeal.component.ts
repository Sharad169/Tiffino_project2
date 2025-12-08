import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { SuperadminSidebarComponent } from '../superadmin-sidebar/superadmin-sidebar.component';
 
@Component({
  selector: 'app-superadminmeal',
  standalone: true,
  imports: [CommonModule, FormsModule, SuperadminSidebarComponent],
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
