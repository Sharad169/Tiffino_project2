import { Component, OnInit } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { SidebarComponent } from '../sidebar/sidebar.component';
import { UserService } from '../service/user.service';
import { CommonModule } from '@angular/common';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { log } from 'console';
 
@Component({
  selector: 'app-addresspage',
  standalone: true,
  imports: [RouterModule, SidebarComponent, CommonModule, FormsModule, ReactiveFormsModule],
  templateUrl: './address-page.component.html',
  styleUrls: ['./address-page.component.css'], 
})
export class AddressPageComponent implements OnInit  {

isAddressPage: boolean = true;
  addressForm!: FormGroup;
    addresses: any[] = [];
    userId: number = Number(sessionStorage.getItem('userId'));
    editingAddressId: number | null = null;
  addressList: any[] = [];
  isEditMode: boolean = false;

  constructor(public api : UserService, public router : Router) {}

  ngOnInit(): void {  
    this.loadAddresses()
       this.addressForm = new FormGroup({
      name: new FormControl('', [Validators.required, Validators.minLength(3)]),
      secondaryPhone: new FormControl('', [Validators.required, Validators.pattern('^[0-9]{10}$')]),
      city: new FormControl('', Validators.required),
      state: new FormControl('', Validators.required),
      address: new FormControl('', Validators.required),
      pincode: new FormControl('', [Validators.required, Validators.pattern('^[0-9]{6}$')])
    });
    
    
  }

 onSubmit() {
  if (this.addressForm.invalid) {
    this.addressForm.markAllAsTouched();
    return;
  }

  const formData = this.addressForm.value;

  if (this.editingAddressId) {
    // ✅ Update existing address
    this.api.updateAddress(this.editingAddressId, formData).subscribe({
      next: (res) => {
        console.log('✅ Address updated:', res);

        // Update local array
        const index = this.addresses.findIndex(a => a.id === this.editingAddressId);
        if (index !== -1) this.addresses[index] = res;

        alert('Address updated successfully!');

        // Reset form and editing state
        this.addressForm.reset();
        this.isEditMode = false; 
        this.isAddressPage = true;
        this.editingAddressId = null;
      },
      error: (err) => console.error('Error updating address:', err)
    });
  } else {
    // ✅ Add new address
    this.api.addAddress(this.userId, formData).subscribe({
      next: (res) => {
        console.log('✅ Address added:', res);

        // Add to local array
        this.addresses.push(res);

        alert('Address added successfully!');
        this.addressForm.reset();
        this.isAddressPage = true;
      },
      error: (err) => console.error('Error adding address:', err)
    });
  }
}

isInvalid(controlName: string): boolean {
    const control = this.addressForm.get(controlName);
    return !!(control && control.touched && control.invalid);
  }



  loadAddresses() {
    const userIdStr = sessionStorage.getItem('userId');
    if (!userIdStr) {
      console.error('User ID not found in session storage.');
      return;
    }
    const userId = Number(userIdStr);
    if (Number.isNaN(userId)) {
      console.error('User ID in session storage is not a valid number:', userIdStr);
      return;
    }
    this.api.getAddressesByUserId(userId).subscribe((data) => {
      console.log(data);
      this.addresses = data;
    });
  }

  showTable(): void {
  this.isAddressPage = !this.isAddressPage;
}

  editAddress(address: any) {
    debugger

    this.isAddressPage = false;
      this.isEditMode = true;
   

    this.editingAddressId = address.id;
    this.addressForm.patchValue({
  name: address.name || '',          // <-- default to empty string
  secondaryPhone: address.secondaryPhone || '',
  city: address.city || '',
  state: address.state || '',
  address: address.address || '',
  pincode: address.pincode || ''
});
    console.log('Form Values:', this.addressForm.value);
  }


deleteAddress(addressId: number) {
  if (confirm('Are you sure you want to delete this address?')) {
    this.api.deleteAddress(addressId).subscribe({
      next: (res) => {
        console.log('Address deleted successfully:', res);

        // 🔥 Option 1: Remove deleted address locally
        this.addressList = this.addressList.filter(addr => addr.id !== addressId);

        // 🔥 Option 2: Or reload full list from backend
        this.loadAddresses();
      },
      error: (err) => {
        console.error('Error deleting address:', err);
      }
    });
  }
}


}