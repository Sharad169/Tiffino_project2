import { Component } from '@angular/core';
import { DelpartnersidebarComponent } from '../delpartnersidebar/delpartnersidebar.component';

@Component({
  selector: 'app-delpartnerdashboard',
  standalone: true,
  imports: [DelpartnersidebarComponent],
  templateUrl: './delpartnerdashboard.component.html',
  styleUrls: ['./delpartnerdashboard.component.css'], // fixed plural
})
export class DelpartnerdashboardComponent {}
