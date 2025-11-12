import { Component } from '@angular/core';
import { RouterModule, Router } from '@angular/router';
import { Location, CommonModule } from '@angular/common';
@Component({
  selector: 'app-delpartnersidebar',
  standalone: true,
  imports: [RouterModule, CommonModule],
  templateUrl: './delpartnersidebar.component.html',
  styleUrls: ['./delpartnersidebar.component.css'],
})
export class DelpartnersidebarComponent {
  constructor(public router: Router) {}

  // helper function to check active route
  isActive(path: string): boolean {
    return this.router.url === path;
  }
}
