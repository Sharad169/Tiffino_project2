import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SuperadminSidebarComponent } from '../superadmin-sidebar/superadmin-sidebar.component';
import { AdminService } from '../admin.service';
 
@Component({
  selector: 'app-superadminmeal',
  standalone: true,
  imports: [CommonModule, FormsModule, SuperadminSidebarComponent, ReactiveFormsModule],
  templateUrl: './superadminmeal.component.html',
  styleUrls: ['./superadminmeal.component.css'],
})
export class SuperadminmealComponent {
  nutritionValue: string = '';
  fileName: string = '';
  cuisineForm!: FormGroup;
  cuisineForm1!: FormGroup;
  selectedFile: File | null = null;
  showMealForm = false;
  showCuisineForm = false;
  activeForm: string = ''; // NEW: track which button is active
  selectedNutrition: string[] = [];
  dropdownOpen: boolean = false;
  allergensDropdownOpen: boolean = false;
selectedAllergens: string[] = [];
fileName1: string = '';
selectedFile1: File | null = null;

nutritionList: string[] = [
  'high-protein',
  'protein-rich',
  'low-calorie',
  'low-carb',
  'low-fat',
  'fiber-rich',
  'sugar-free',
  'diabetic-friendly',
  'keto-friendly',
  'balanced-nutrition',
  'antioxidant-rich',
  'immunity-boosting',
  'gut-friendly',
  'vitamin-c-rich',
  'vitamin-b12-rich',
  'calcium-rich',
  'iron-rich',
  'omega-3-rich',
  'weight-loss',
  'heart-healthy'
];
allergensList: string[] = [
  'dairy-containing',
  'nut-containing',
  'peanut-containing',
  'egg-containing',
  'soy-containing',
  'gluten-containing',
  'wheat-containing',
  'sesame-containing',
  'seafood-containing',
  'shellfish-containing'
];
  constructor(private fb: FormBuilder, private api: AdminService) {}

    ngOnInit() {
    this.cuisineForm = this.fb.group({
      name: [''],
      description: [''],
      category: ['']
    });

    this.cuisineForm1 = this.fb.group({
  mealName: [''],
  cuisineName: [''],
  amount: [''],
  description: [''],
  mealType: [''],
  healthNutrition: [[]], // array
  allergens: [[]]         // array
});
  }

   onFileSelect(event: any) {
    const file = event.target.files[0];
    if (file) {
      this.selectedFile = file;
    }
  }

   selectCategory(value: string) {
    this.cuisineForm.patchValue({ category: value });
  }

toggleNutrition(value: string) {
  if (this.selectedNutrition.includes(value)) {
    this.selectedNutrition = this.selectedNutrition.filter(item => item !== value);
  } else {
    this.selectedNutrition.push(value);
  }

  this.cuisineForm1.patchValue({ healthNutrition: this.selectedNutrition });
}

toggleDropdown() {
  this.dropdownOpen = !this.dropdownOpen;
}

toggleAllergensDropdown() {
  this.allergensDropdownOpen = !this.allergensDropdownOpen;
}

removeNutrition(value: string) {
  this.selectedNutrition = this.selectedNutrition.filter(item => item !== value);
  this.cuisineForm1.patchValue({ healthNutrition: this.selectedNutrition });
}
 
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

    saveCuisine() {
      

       const cuisine = this.cuisineForm.value;


    const formData = new FormData();
    formData.append(

    'cuisine',

    new Blob([JSON.stringify(cuisine)], { type: 'application/json' })

  );


    // formData.append("name", this.cuisineForm.get("name")?.value);
    // formData.append("description", this.cuisineForm.get("description")?.value);
    // formData.append("category", this.cuisineForm.get("category")?.value);

    if (this.selectedFile) {
      formData.append("image", this.selectedFile); // 👈 backend field name = "image"
    }

    this.api.addCuisine(formData).subscribe({
      next: (res) => {
        alert("Cuisine Added Successfully!");
        this.cuisineForm.reset();
      },
      error: (err) => {
        console.error(err);
        alert("Error while saving cuisine");
      }
    });
  }

  toggleAllergen(value: string) {
  if (this.selectedAllergens.includes(value)) {
    this.selectedAllergens = this.selectedAllergens.filter(item => item !== value);
  } else {
    this.selectedAllergens.push(value);
  }

  this.cuisineForm1.patchValue({ allergens: this.selectedAllergens });
}

removeAllergen(value: string) {
  this.selectedAllergens = this.selectedAllergens.filter(item => item !== value);
  this.cuisineForm1.patchValue({ allergens: this.selectedAllergens });
}

selectMealType(value: string) {
  this.cuisineForm1.patchValue({
    mealType: value
  });
}



onFileSelect1(event: any) {
  const file = event.target.files[0];
  if (file) {
    this.selectedFile1 = file;
    this.fileName1 = file.name;
  }
}

saveMeal() {
  if (this.cuisineForm1.invalid) {
    return;
  }

  const formValues = this.cuisineForm1.value;
   const cuisine = this.cuisineForm1.value;

  // FormData to handle image
  const fd = new FormData();
    fd.append(

    'cuisine',

    new Blob([JSON.stringify(cuisine)], { type: 'application/json' })

  );
  fd.append('name', formValues.mealName);
  fd.append('description', formValues.description);
  fd.append('price', formValues.amount);
  fd.append('cuisineId', formValues.cuisineName); // if cuisineId numeric, convert: +formValues.cuisineName
  fd.append('dietType', 'VEGETARIAN'); // hardcoded for now, can add dropdown

  // Nutrition Info array
  formValues.healthNutrition.forEach((nut: string) => fd.append('nutritionInfo', nut));

  // Allergens array
  formValues.allergens.forEach((all: string) => fd.append('allergens', all));

  // Meal Type array
  formValues.mealType.forEach((meal: string) => fd.append('mealType', meal));

  // Image
  if (this.selectedFile) {
    fd.append('imgUrl', this.selectedFile, this.selectedFile.name);
  }

  this.api.addMeal(fd).subscribe({
    next: (res) => {
      console.log('Cuisine added successfully', res);
      alert('Cuisine added successfully!');
      this.cuisineForm1.reset();
      this.selectedFile = null;
      this.fileName = '';
      this.selectedNutrition = [];
      this.selectedAllergens = [];
    },
    error: (err) => {
      console.error('Error adding cuisine', err);
      alert('Failed to add cuisine.');
    }
  });
}

}
