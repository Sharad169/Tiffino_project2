import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Router } from '@angular/router';
import { FormsModule } from '@angular/forms'; // ✅ ADD THIS

@Component({
  selector: 'app-deleteaccount1',
  standalone: true,
  imports: [RouterModule, CommonModule, FormsModule], // ✅ include FormsModule
  templateUrl: './deleteaccount1.component.html',
  styleUrls: ['./deleteaccount1.component.css'],
})
export class Deleteaccount1Component {
  constructor(private router: Router) {}

  selectedReason: string = 'Other';
  userText: string = ''; // input model

  get isOtherSelected(): boolean {
    return this.selectedReason === 'Other';
  }

  onReasonSelect(reasonValue: string): void {
    this.selectedReason = reasonValue;
  }

  onSubmit(): void {
    if (this.isOtherSelected && !this.userText.trim()) {
      alert('Please enter a reason before proceeding.');
      return;
    }

    const finalReason = this.isOtherSelected
      ? this.userText
      : this.selectedReason;
    console.log('Selected reason:', finalReason);

    this.router.navigate(['/deleteaccount2'], {
      state: { reason: finalReason },
    });
  }
}

// import { Component } from '@angular/core';
// import { CommonModule } from '@angular/common';
// import { RouterModule, Router } from '@angular/router'; // <-- Import Router here

// @Component({
//   selector: 'app-deleteaccount1',
//   standalone: true,
//   imports: [RouterModule, CommonModule],
//   templateUrl: './deleteaccount1.component.html',
//   styleUrls: ['./deleteaccount1.component.css'],
// })
// export class Deleteaccount1Component {

//   constructor(private router: Router) {}

//   selectedReason: string = 'Other';

//   get isOtherSelected(): boolean {
//     return this.selectedReason === 'Other';
//   }

//   onReasonSelect(reasonValue: string): void {
//     this.selectedReason = reasonValue;
//   }

//   goToConfirmationPage(): void {

//     this.router.navigate(['/deleteaccount1/confirm']);
//   }
// }

// import { Component } from '@angular/core';
// import { CommonModule } from '@angular/common';
// import { FormsModule } from '@angular/forms';
// import { RouterModule, Router } from '@angular/router';

// @Component({
//   selector: 'app-deleteaccount1',
//   standalone: true,
//   imports: [CommonModule, RouterModule, FormsModule],
//   templateUrl: './deleteaccount1.component.html',
//   styleUrls: ['./deleteaccount1.component.css'],
// })
// export class DeleteAccount1Component {
//   constructor(private router: Router) {}

//   selectedReason: string = '';
//   userText: string = '';

//   // ✅ Add the reasons array
//   reasons = [
//     { label: 'I don’t use the app anymore', value: 'NoApp' },
//     {
//       label: 'I’m not satisfied with the food quality or taste',
//       value: 'BadFood',
//     },
//     { label: 'I faced issues with delivery or timing', value: 'late delivery' },

//     { label: 'Prices are too high', value: 'HighPrice' },

//     { label: 'The app is slow, buggy, or difficult to use', value: 'buggy' },

//     {
//       label: 'Customer support didn’t resolve my issue',
//       value: 'not supportive',
//     },

//     {
//       label: 'I’m worried about my privacy or personal data',
//       value: 'privacy issue',
//     },

//     { label: ' I prefer another food delivery app', value: 'not good enough' },

//     {
//       label: ' I have duplicate or multiple accounts',
//       value: 'not maintain account',
//     },

//     { label: 'Other', value: 'Other' },
//   ];

//   get isOtherSelected(): boolean {
//     return this.selectedReason === 'Other';
//   }

//   onReasonSelect(reasonValue: string): void {
//     this.selectedReason = reasonValue;
//   }

//   onSubmit(): void {
//     if (this.isOtherSelected && !this.userText.trim()) {
//       alert('Please enter your reason before submitting.');
//       return;
//     }
//     this.router.navigate(['/deleteaccount2']);
//   }
// }
