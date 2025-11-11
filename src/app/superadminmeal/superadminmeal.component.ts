import { Component } from '@angular/core';
import { Sidebar2Component } from '../sidebar2/sidebar2.component';

@Component({
  selector: 'app-superadminmeal',
  standalone: true,
  imports: [Sidebar2Component],
  templateUrl: './superadminmeal.component.html',
  styleUrls: ['./superadminmeal.component.css'],
})
export class SuperadminmealComponent {}
