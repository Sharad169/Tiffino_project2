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
  fileName: string = '';
  cuisineForm!: FormGroup;
  selectedFile: File | null = null;
  showMealForm = false;
  showCuisineForm = false;
  activeForm: string = ''; // NEW: track which button is active

  constructor(private fb: FormBuilder, private api: AdminService) {}

    ngOnInit() {
    this.cuisineForm = this.fb.group({
      name: [''],
      description: [''],
      category: ['']
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
}
