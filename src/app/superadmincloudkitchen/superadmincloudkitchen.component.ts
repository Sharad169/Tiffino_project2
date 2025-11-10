import { Component } from '@angular/core';
import { SuperadminSidebarComponent } from '../superadmin-sidebar/superadmin-sidebar.component';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { AdminService } from '../admin.service';

@Component({
  selector: 'app-superadmincloudkitchen',
  standalone: true,
  imports: [SuperadminSidebarComponent, CommonModule,ReactiveFormsModule],
  templateUrl: './superadmincloudkitchen.component.html',
styleUrls: ['./superadmincloudkitchen.component.css']
})
export class SuperadmincloudkitchenComponent {
   addressForm!: FormGroup;

  constructor(private fb: FormBuilder, public api : AdminService) {}

  ngOnInit() {
    this.addressForm = this.fb.group({
      name: [''],
      city: [''],
      pin: [''],
      state: [''],
      region: [''],
      address: [''],
    });
  }

 
  onSubmit() {
    if (this.addressForm.valid) {
      this.api.addKitchen(this.addressForm.value).subscribe({
        next: (res) => {
          console.log('Kitchen added successfully:', res);
          alert('Kitchen added successfully!');
        },
        error: (err) => {
          console.error('Error adding kitchen:', err);
          alert('Something went wrong!');
        }
      });
    } else {
      alert('Please fill all required fields');
    }
  }

}
