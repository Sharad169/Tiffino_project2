import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SidebarComponent } from '../sidebar/sidebar.component';
import { UserService } from '../service/user.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-addresspage',
  standalone: true,
  imports: [RouterModule, SidebarComponent, CommonModule],
  templateUrl: './address-page.component.html',
  styleUrls: ['./address-page.component.css'],
})
export class AddressPageComponent implements OnInit {
  addresses: any[] = [];

  constructor(public api: UserService) {}

  ngOnInit(): void {
    this.loadAddresses();
  }

  loadAddresses() {
    const userIdStr = sessionStorage.getItem('userId');
    if (!userIdStr) {
      console.error('User ID not found in session storage.');
      return;
    }

    const userId = Number(userIdStr);
    if (Number.isNaN(userId)) {
      console.error('Invalid user ID:', userIdStr);
      return;
    }

    this.api.getAddressesByUserId(userId).subscribe({
      next: (data: any) => {
        console.log('Address Data:', data);
        this.addresses = Array.isArray(data) ? data : [data]; 
      },
      error: (err) => {
        console.error('Error fetching addresses:', err);
      },
    });
  }
}
