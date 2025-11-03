import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Router } from '@angular/router';
import { SidebarComponent } from '../sidebar/sidebar.component';

@Component({
  selector: 'app-promocode',
  standalone: true,
  imports: [CommonModule, RouterModule, SidebarComponent],
  templateUrl: './promocode.component.html',
  styleUrl: './promocode.component.css',
})
export class PromocodeComponent {}
