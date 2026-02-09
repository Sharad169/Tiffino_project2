import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SidebarComponent } from '../sidebar/sidebar.component';
@Component({
  selector: 'app-getplan',
  standalone: true,
  imports: [RouterModule, SidebarComponent],
  templateUrl: './getplan.component.html',
  styleUrl: './getplan.component.css',
})
export class GetplanComponent {}
