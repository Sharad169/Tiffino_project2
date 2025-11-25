import { Component } from '@angular/core';
import { ManagersidebarComponent } from '../managersidebar/managersidebar.component';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-manager-yourdetailseditrequestpage',
  standalone: true,
  imports: [ManagersidebarComponent, RouterModule],
  templateUrl: './manager-yourdetailseditrequestpage.component.html',
  styleUrls: ['./manager-yourdetailseditrequestpage.component.css'],
})
export class ManagerYourdetailseditrequestpageComponent {}
