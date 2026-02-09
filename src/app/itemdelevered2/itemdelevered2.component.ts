import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { SidebarComponent } from '../sidebar/sidebar.component';
@Component({
  selector: 'app-itemdelevered2',
  standalone: true,
  imports: [CommonModule, RouterModule, SidebarComponent],
  templateUrl: './itemdelevered2.component.html',
  styleUrl: './itemdelevered2.component.css',
})
export class Itemdelevered2Component {}
