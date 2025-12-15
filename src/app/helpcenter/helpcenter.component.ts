import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SidebarComponent } from '../sidebar/sidebar.component';
@Component({
  selector: 'app-helpcenter',
  standalone: true,
  imports: [RouterModule, SidebarComponent],
  templateUrl: './helpcenter.component.html',
  styleUrls: ['./helpcenter.component.css'],
})
export class HelpCenterComponent {}