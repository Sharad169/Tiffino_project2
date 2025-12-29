import { Component, ViewChild, ElementRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-dietarypreferance',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './user-dietarypreferance.component.html',
  styleUrl: './user-dietarypreferance.component.css',
})
export class UserDietarypreferanceComponent {
  activeSection: string = 'dietary';

  @ViewChild('optionsBar') optionsBar!: ElementRef;

  dietaryOptions = [
    'Vegetarian',
    'Non-Vegetarian',
    'Vegan',
    'Eggetarian',
    'Other',
  ];
  selectedDietary = '';
  dietaryOtherText = '';

  mealTypeOptions = ['Breakfast', 'Lunch', 'Dinner', 'Snacks', 'Full-Day Meal'];
  selectedMealTypes: string[] = [];

  spiceOptions = ['Mild Spice', 'Medium Spice', 'Extra Spicy'];
  selectedSpice = '';

  healthNutritionOptions = [
    'Low-Calorie',
    'High-Protein',
    'Keto / Low-Carb',
    'Balanced Diet',
    'Sugar-Free',
    'Low-Sodium',
  ];
  selectedHealthNutrition: string[] = [];

  allergenOptions = [
    'Dairy-Free',
    'Nut-Free',
    'Gluten-Free',
    'Soy-Free',
    'Egg-Free',
    'Other',
  ];

  selectedAllergens: string[] = [];

  allergenOtherText: string = ''; // ✅ REQUIRED FIX

  constructor(private router: Router) {}

  toggleCheckbox(value: string, list: string[]) {
    const index = list.indexOf(value);
    index === -1 ? list.push(value) : list.splice(index, 1);
  }

  // ✅ NEXT STEP (ONLY ACTIVE CHANGES)
  goNext() {
    const steps = [
      'dietary',
      'mealType',
      'spice',
      'healthNutrition',
      'allergens',
    ];

    // 🔹 Final step → navigate
    if (this.activeSection === 'allergens') {
      this.router.navigate(['/user-finalpage']);
      return;
    }
    const currentIndex = steps.indexOf(this.activeSection);

    if (currentIndex < steps.length - 1) {
      this.activeSection = steps[currentIndex + 1];
      this.scrollToActive();
    }
  }

  showSection(section: string) {
    this.activeSection = section;
    this.scrollToActive();
  }

  scrollToActive() {
    setTimeout(() => {
      const btn = this.optionsBar.nativeElement.querySelector(
        `[data-section="${this.activeSection}"]`
      );
      btn?.scrollIntoView({ behavior: 'smooth', inline: 'center' });
    }, 100);
  }
}
