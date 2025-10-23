import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Router } from '@angular/router';
@Component({
  selector: 'app-promocode',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './promocode.component.html',
  styleUrl: './promocode.component.css',
})
export class PromocodeComponent {}
