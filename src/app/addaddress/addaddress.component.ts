import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SidebarComponent } from '../sidebar/sidebar.component';

@Component({
  selector: 'app-addaddress',
  standalone: true,
  imports: [RouterModule, SidebarComponent], // ✅ Added RouterModule here
  templateUrl: './addaddress.component.html',
  styleUrls: ['./addaddress.component.css'],
})
export class AddaddressComponent {}
