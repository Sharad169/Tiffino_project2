import { Component } from '@angular/core';
import { ChefSidebarComponent } from '../chef-sidebar/chef-sidebar.component';
import { RouterModule } from '@angular/router';
@Component({
  selector: 'app-chef-yourdetailsrequestpage',
  standalone: true,
  imports: [ChefSidebarComponent, RouterModule],
  templateUrl: './chef-yourdetailsrequestpage.component.html',
  styleUrls: ['./chef-yourdetailsrequestpage.component.css'],
})
export class ChefYourdetailsrequestpageComponent {}
