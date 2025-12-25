import { Component } from '@angular/core';
import { SuperadminSidebarComponent } from '../superadmin-sidebar/superadmin-sidebar.component';

@Component({
  selector: 'app-cloudkitchen-registration',
  standalone: true,
  imports: [SuperadminSidebarComponent],
  templateUrl: './cloudkitchen-registration.component.html',
  styleUrls: ['./cloudkitchen-registration.component.css']
})
export class CloudkitchenRegistrationComponent { }
