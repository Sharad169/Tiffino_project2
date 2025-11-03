import { Component } from '@angular/core';
import { Sidebar2Component } from '../sidebar2/sidebar2.component';
import { RouterModule } from '@angular/router';
@Component({
  selector: 'app-superadminkitchen',
  standalone: true,
  imports: [Sidebar2Component, RouterModule],
  templateUrl: './superadminkitchen.component.html',
  styleUrls: ['./superadminkitchen.component.css'],
})
export class SuperadminkitchenComponent {}
