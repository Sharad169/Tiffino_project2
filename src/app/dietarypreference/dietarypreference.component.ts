import { Component } from '@angular/core';
import { CommonModule } from '@angular/common'; // Required for *ngIf

@Component({
  selector: 'app-dietarypreference',
  standalone: true,
  imports: [CommonModule], // ✅ Needed for *ngIf to work
  templateUrl: './dietarypreference.component.html',
  styleUrls: ['./dietarypreference.component.css'], // ✅ Corrected property
})
export class DietarypreferenceComponent {
  showOtherInput: boolean = false; // ✅ Controls the textbox visibility
}
