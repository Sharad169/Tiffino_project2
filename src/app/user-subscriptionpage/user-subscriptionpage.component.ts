import { Component } from '@angular/core';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-user-subscriptionpage',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './user-subscriptionpage.component.html',
  styleUrl: './user-subscriptionpage.component.css',
})
export class UserSubscriptionpageComponent {
  constructor(private router: Router) {}

  goToDietaryPreference(): void {
    this.router.navigate(['/user-dietarypreference']);
  }
}
