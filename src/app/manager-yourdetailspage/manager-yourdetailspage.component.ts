import { Component } from '@angular/core';
import { ManagersidebarComponent } from '../managersidebar/managersidebar.component';
import { Router } from '@angular/router';
@Component({
  selector: 'app-manager-yourdetailspage',
  standalone: true,
  imports: [ManagersidebarComponent],
  templateUrl: './manager-yourdetailspage.component.html',
  styleUrls: ['./manager-yourdetailspage.component.css'],
})
export class ManagerYourdetailspageComponent {
  constructor(private router: Router) {}

  goToEditPage() {
    this.router.navigate(['/manager-yourdetailseditrequestpage']);
  }
}
