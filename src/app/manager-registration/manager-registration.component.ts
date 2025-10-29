import { Component } from '@angular/core';
import { SuperadminSidebarComponent } from '../superadmin-sidebar/superadmin-sidebar.component'; 

@Component({
  selector: 'app-manager-registration',
  standalone: true,
  imports: [SuperadminSidebarComponent], 
  templateUrl: './manager-registration.component.html',
  styleUrls: ['./manager-registration.component.css']
})
export class ManagerRegistrationComponent {}
