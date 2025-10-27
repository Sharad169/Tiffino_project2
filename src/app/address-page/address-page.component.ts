import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SidebarComponent } from '../sidebar/sidebar.component';
 
@Component({
  selector: 'app-addresspage',
  standalone: true,
  imports: [RouterModule, SidebarComponent],
  templateUrl: './address-page.component.html',
  styleUrls: ['./address-page.component.css'], 
})
export class AddressPageComponent  {}