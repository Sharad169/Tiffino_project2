import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SidebarComponent } from '../sidebar/sidebar.component';

@Component({
  selector: 'app-addresspage',
  standalone: true,
  imports: [RouterModule, SidebarComponent], // <-- Add this
  templateUrl: './addresspage.component.html',
  styleUrls: ['./addresspage.component.css'], // small typo: 'styleUrls' not 'styleUrl'
})
export class AddresspageComponent {}
