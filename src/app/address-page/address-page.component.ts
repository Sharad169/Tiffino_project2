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
export class AddressPageComponent implements OnInit  {


  constructor(public api : UserService) {}

  ngOnInit(): void {
  
    this.loadAddresses()
    
    
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
    });
  }

}