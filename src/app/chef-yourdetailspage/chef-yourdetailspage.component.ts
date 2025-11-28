import { Component } from '@angular/core';
import { ChefSidebarComponent } from '../chef-sidebar/chef-sidebar.component';
import { Router } from '@angular/router';
@Component({
  selector: 'app-chef-yourdetailspage',
  standalone: true,
  imports: [ChefSidebarComponent],
  templateUrl: './chef-yourdetailspage.component.html',
  styleUrls: ['./chef-yourdetailspage.component.css'],
})
export class ChefYourdetailspageComponent {
  constructor(private router: Router) {}

  goToEditPage() {
    this.router.navigate(['/chef-yourdetailsrequestpage']);
  }
}
