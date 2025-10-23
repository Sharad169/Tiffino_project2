// src/app/deleteaccount2/deleteaccount2.component.ts
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-deleteaccount2',
  standalone: true,
  imports: [RouterModule, CommonModule],
  templateUrl: './deleteaccount2.component.html',
  styleUrls: ['./deleteaccount2.component.css'],
})
export class Deleteaccount2Component {
  constructor(private router: Router) {}

  confirmDelete(confirmed: boolean): void {
    if (confirmed) {
      alert('Your account has been deleted successfully.');
    }
    this.router.navigate(['/profile']);
  }
}
