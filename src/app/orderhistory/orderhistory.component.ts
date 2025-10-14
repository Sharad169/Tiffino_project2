import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router'; // ✅ import this

@Component({
  selector: 'app-orderhistory',
  standalone: true,
  imports: [CommonModule, RouterModule], // ✅ include RouterModule here
  templateUrl: './orderhistory.component.html',
  styleUrls: ['./orderhistory.component.css'], // ✅ note the plural 'styleUrls'
})
export class OrderhistoryComponent {}

/*import { Component } from '@angular/core';

@Component({
  selector: 'app-orderhistory',
  standalone: true,
  imports: [],
  templateUrl: './orderhistory.component.html',
  styleUrl: './orderhistory.component.css'
})
export class OrderhistoryComponent {

}*/
