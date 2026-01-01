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

  ngOnInit(): void {
    // ✅ CLEAR OLD SESSION DATA WHEN USER COMES BACK
    sessionStorage.removeItem('selectedPlan');
    sessionStorage.removeItem('subscriptionPreferences');
  }

  goToDietaryPreference(plan: string): void {
    sessionStorage.setItem('selectedPlan', plan);
    this.router.navigate(['/user-dietarypreference']);
  }
}
