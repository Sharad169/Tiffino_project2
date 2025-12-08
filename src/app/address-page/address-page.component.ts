import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SidebarComponent } from '../sidebar/sidebar.component';
import { UserService } from '../service/user.service';

@Component({
  selector: 'app-addresspage',
  standalone: true,
  imports: [RouterModule, SidebarComponent],
  templateUrl: './address-page.component.html',
  styleUrls: ['./address-page.component.css'],
})
export class AddressPageComponent implements OnInit {
  
  addresses: any[] = [];

  // ⭐ Added variables to fix your error
  isAddressPage: boolean = true;   // true = show address list
  showTableFlag: boolean = false;  // for toggling view (you were calling showTable())

  constructor(public api: UserService) {}

  ngOnInit(): void {
    this.loadAddresses();
  }

  // ⭐ FIX showTable() function (you used it in HTML but never created it)
  showTable() {
    this.isAddressPage = !this.isAddressPage;
    this.showTableFlag = !this.showTableFlag;
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

    this.api.getAddressesByUserId(userId).subscribe((data) => {
      console.log(data);
      this.addresses = data;
    });
  }
}
