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
export class AddressPageComponent implements OnInit {

  isAddressPage: boolean = true;
  addressForm!: FormGroup;
  addresses: any[] = [];
  userId: number = Number(sessionStorage.getItem('userId'));
  editingAddressId: number | null = null;
  addressList: any[] = [];
  isEditMode: boolean = false;

  constructor(public api: UserService, public router: Router) { }

  ngOnInit(): void {
    this.loadAddresses()
    this.addressForm = new FormGroup({
      name: new FormControl('', [
        Validators.required,
        Validators.minLength(3),
        Validators.pattern('^[A-Za-z]{3,}$')
      ]),
      secondaryPhone: new FormControl('', [Validators.required, Validators.pattern('^[0-9]{10}$')]),
      city: new FormControl('', [
        Validators.required,
        Validators.pattern('^[A-Za-z]+$')
      ]),
      state: new FormControl('', [
        Validators.required,
        Validators.pattern('^[A-Za-z]+$')
      ]),
      address: new FormControl('', [
        Validators.required,
        Validators.minLength(10),
        Validators.pattern('^(?!.*\\s{2,})[A-Za-z0-9.,/#-\\s]+$')
      ]),
      pincode: new FormControl('', [
        Validators.required,
        Validators.pattern('^[1-9][0-9]{5}$')
      ])
    });


  }
  onSubmit() {
    debugger
    if (this.addressForm.invalid) {
      this.addressForm.markAllAsTouched();
      return;
    }

    const formData = this.addressForm.value;
    const formName = String(formData.name).trim();
    const formMobile = String(formData.secondaryPhone).trim();
    const editId = this.editingAddressId ? Number(this.editingAddressId) : null;

    // 🔍 DUPLICATE MOBILE CHECK
    const isDuplicateMobile = this.addresses.some(addr =>
      String(addr.secondaryPhone).trim() === formMobile &&
      addr.id !== editId
    );

    if (isDuplicateMobile) {
      alert('Mobile number already exists!');
      return;
    }

    const isDuplicateName = this.addresses.some(addr =>
      String(addr.name).trim() === formName &&
      addr.id !== editId
    );

    if (isDuplicateName) {
      alert('Name already exists!');
      return;
    }



    // ==========================
    // UPDATE
    // ==========================
    if (this.editingAddressId) {
      this.api.updateAddress(editId!, formData).subscribe({
        next: (res) => {
          const index = this.addresses.findIndex(a => a.id === editId);
          if (index !== -1) this.addresses[index] = res;
          alert('Address updated successfully!');
          this.resetFormState();
        },
        error: (err) => console.error(err)
      });

    } else {
      // ==========================
      // ADD
      // ==========================
      this.api.addAddress(this.userId, formData).subscribe({
        next: (res) => {
          this.addresses.push(res);
          alert('Address added successfully!');
          this.resetFormState();
        },
        error: (err) => {
          if (err.status === 409) {
            alert('Mobile number already exists!');
          } else {
            alert('Something went wrong!');
          }
        }
      });
    }
  }




  resetFormState() {
    this.addressForm.reset();
    this.isEditMode = false;
    this.isAddressPage = true;
    this.editingAddressId = null;
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