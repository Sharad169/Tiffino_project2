import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms'; 

@Component({
  selector: 'app-dietary-preference',
  standalone: true, 
  imports: [CommonModule, FormsModule], 
  templateUrl: './dietary-preference.component.html',
  styleUrls: ['./dietary-preference.component.css']
})
export class DietaryPreferenceComponent {
  activeSection: string = 'dietary';

  selectedDietary: string = '';
  selectedCuisine: string = '';

  dietaryOptions: string[] = [
    'Vegetarian',
    'Non-Vegetarian',
    'Vegan',
    'Eggetarian',
    'Other'
  ];

  cuisineOptions: string[] = [
    'Andhra Cuisine',
    'Arunachali Cuisine',
    'Assamese Cuisine',
    'Bihari Cuisine',
    'Chhattisgarhi Cuisine',
    'Goan Cuisine',
    'Gujarati Cuisine',
    'Haryanvi Cuisine',
    'Himachali Cuisine',
    'Jharkhandi Cuisine',
    'Kannada Cuisine',
    'Kerala Cuisine',
    'MP Cuisine',
    'Maharashtrian Cuisine',
    'Manipuri Cuisine',
    'Meghalayan Cuisine',
    'Mizo Cuisine',
    'Naga Cuisine',
    'Odia Cuisine',
    'Punjabi Cuisine',
    'Rajasthani Cuisine',
    'Sikkimese Cuisine',
    'Tamil Cuisine',
    'Telangana Cuisine',
    'Tripuri Cuisine',
    'Awadhi Cuisine',
    'Kumaoni & Garhwali Cuisine',
    'Bengali Cuisine'
  ];

  selectedMealType: string = '';

mealTypeOptions: string[] = [
  'Breakfast',
  'Lunch',
  'Dinner',
  'Snacks',
  'Full-Day Meal'
];

selectedPortion: string = '';
selectedSpice: string = '';

portionOptions: string[] = ['Small', 'Medium', 'Large'];

spiceOptions: string[] = ['Mild Spice', 'Medium Spice', 'Extra Spicy'];

selectedHealthNutrition: string = '';

healthNutritionOptions: string[] = [
  'Low-Calorie',
  'High-Protein',
  'Keto / Low-Carb',
  'Balanced Diet',
  'Sugar-Free',
  'Low-Sodium'
];

selectedAllergen: string = '';

allergenOptions: string[] = [
  'Dairy-Free',
  'Nut-Free',
  'Gluten-Free',
  'Soy-Free',
  'Egg-Free',
  'Other'
];

// Specials Section
selectedSpecial: string = '';

specialOptions: string[] = [
  'Popular Meals',
  'Top-Rated',
  'Chef’s Special',
  'Seasonal / Festive Specials',
  'Family Packs'
];

// Price Range Section 
selectedPriceRange: string = '';

priceRangeOptions: string[] = [
  'Under ₹100',
  '₹100 – ₹200',
  '₹200 – ₹300',
  '₹300+'
];

// Ratings & Reviews Section 
selectedRatingsReviews: string = '';

ratingsReviewsOptions: string[] = [
  '4 & above',
  'Top-Rated by Users'
];

  showSection(section: string) {
    this.activeSection = this.activeSection === section ? '' : section;
  }
}
