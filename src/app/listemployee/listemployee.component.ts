import { Component } from '@angular/core';
import { Sidebar2Component } from '../sidebar2/sidebar2.component';
import { CommonModule } from '@angular/common'; // For *ngFor
import { RouterModule } from '@angular/router';
@Component({
  selector: 'app-listemployee',
  standalone: true,
  imports: [Sidebar2Component, CommonModule, RouterModule],
  templateUrl: './listemployee.component.html',
  styleUrls: ['./listemployee.component.css'],
})
export class ListemployeeComponent {
  // Employee data
  employees = [
    {
      name: 'Name ',
      position: 'Position',
      kitchenId: 'Text Number',
      employeeId: 'Text Number',
    },
    {
      name: 'Name',
      position: 'Position',
      kitchenId: 'Text Number',
      employeeId: 'Text Number',
    },
    {
      name: 'Name',
      position: 'Position',
      kitchenId: 'Text Number',
      employeeId: 'Text Number',
    },
    {
      name: 'Name',
      position: 'Position',
      kitchenId: 'Text Number',
      employeeId: 'Text Number',
    },
    {
      name: 'Name',
      position: 'Position',
      kitchenId: 'Text Number',
      employeeId: 'Text Number',
    },
  ];
}
