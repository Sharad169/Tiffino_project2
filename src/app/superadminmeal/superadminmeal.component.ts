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
mealTypeDropdownOpen = false;
selectedMealTypes: string[] = [];
mealTypeList: string[] = ['BREAKFAST', 'LUNCH', 'DINNER'];


 
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
cuisines: any[] = [];

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
  dietTypes: string[] = ['VEGETARIAN', 'NON_VEGETARIAN', 'VEGAN']; 
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
  uploadedImage: any;
  constructor(private fb: FormBuilder, private api: AdminService) {}

    ngOnInit() {
    this.cuisineForm = this.fb.group({
      name: [''],
      description: [''],
      category: ['']
    });

    this.cuisineForm1 = this.fb.group({
  name: [''],
  cuisineName: [''],
  price: [''],
  description: [''],
    cuisineId: [''],
     dietType: [''], 
   mealType: [[]],
  nutritionInfo: [[]], // array
  allergens: [[]]         // array
});

  this.loadCuisines();
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
    this.selectedNutrition = this.selectedNutrition.filter(n => n !== value);
  } else {
    this.selectedNutrition.push(value);
  }
  this.cuisineForm1.patchValue({ nutritionInfo: this.selectedNutrition });
}

toggleDropdown() {
  this.dropdownOpen = !this.dropdownOpen;
}

toggleAllergensDropdown() {
  this.allergensDropdownOpen = !this.allergensDropdownOpen;
}

removeNutrition(value: string) {
  this.selectedNutrition = this.selectedNutrition.filter(item => item !== value);
  this.cuisineForm1.patchValue({ nutritionInfo: this.selectedNutrition });
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
    this.selectedAllergens = this.selectedAllergens.filter(a => a !== value);
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


toggleMealTypeDropdown() {
  this.mealTypeDropdownOpen = !this.mealTypeDropdownOpen;
}

toggleMealType(value: string) {
  if (this.selectedMealTypes.includes(value)) {
    this.selectedMealTypes = this.selectedMealTypes.filter(m => m !== value);
  } else {
    this.selectedMealTypes.push(value);
  }
  this.cuisineForm1.patchValue({ mealType: this.selectedMealTypes });
}

removeMealType(value: string) {
  this.selectedMealTypes = this.selectedMealTypes.filter(m => m !== value);
  this.cuisineForm1.patchValue({ mealType: this.selectedMealTypes });
}

onFileSelect1(event: any) {
  const file = event.target.files[0];
  if (file) {
    this.selectedFile1 = file;
    this.fileName1 = file.name;
  }
}

// saveMeal() {
//   const f = this.cuisineForm1.value;

//   const fd = new FormData();
//   fd.append("name", f.mealName);
//   fd.append("description", f.description);
//   fd.append("price", f.amount);

//   // THIS IS FIXED 🔥
//   fd.append("cuisineId", f.cuisineId.toString());

//   (this.selectedNutrition || []).forEach(n => fd.append("nutritionInfo", n));
//   (this.selectedAllergens || []).forEach(a => fd.append("allergens", a));
//   (this.selectedMealTypes || []).forEach(m => fd.append("mealType", m));

//   if (this.selectedFile1) {
//     fd.append("imgUrl", this.selectedFile1);
//   }

//   this.api.addMeal(fd).subscribe({
//     next: (res) => alert('Meal saved successfully!'),
//     error: (err) => console.error(err)
//   });
// }

saveMeal() {
  if (this.cuisineForm1.invalid) return;
 
  const meal = this.cuisineForm1.value;   // 👈 takes everything exactly from form
 
  const formData = new FormData();
  formData.append(
    "meal",
    new Blob([JSON.stringify(meal)], { type: "application/json" })
  );
 
  if (this.selectedFile1) {
    formData.append("image", this.selectedFile1);

  }
 
  this.api.addMeal(formData).subscribe({
    next: () => {
      alert("Meal added successfully!");
      this.cuisineForm1.reset();
      this.selectedAllergens = [];
      this.selectedMealTypes = [];
      this.selectedNutrition = [];
    },
    error: err => console.error("Meal save error:", err)
  });
}





loadCuisines() {
  this.api.allCuisins().subscribe({
    next: (res) => {
      console.log('Cuisines fetched successfully', res);
      this.cuisines = res as any[];
    },
    error: (err) => {
      console.error('Error fetching cuisines', err);
    }
  });
}
}