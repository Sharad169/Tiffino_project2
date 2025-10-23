import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
@Component({
  selector: 'app-walletpage',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './walletpage.component.html',
  styleUrl: './walletpage.component.css',
})
export class WalletpageComponent {}
