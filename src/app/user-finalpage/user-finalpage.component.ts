import { Component } from '@angular/core';
import { AuthService } from '../service/auth.service';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-user-finalpage',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './user-finalpage.component.html',
  styleUrl: './user-finalpage.component.css',
})
export class UserFinalpageComponent {
  userId!: number;

  plan!: string;
  preferences: any = {};

  startDate!: string;
  endDate!: string;
  amount!: number;

  // ✅ NEW: PLAN FEATURES
  planFeatures: string[] = [];

  constructor(private authService: AuthService, private router: Router) {}

  ngOnInit(): void {
    this.userId = Number(sessionStorage.getItem('userId'));
    this.plan = sessionStorage.getItem('selectedPlan') || '';
    this.preferences = JSON.parse(
      sessionStorage.getItem('subscriptionPreferences') || '{}'
    );

    this.calculatePlanDetails();
    this.setPlanFeatures(); // ✅ NEW
  }

  // 🔥 CALCULATE DATE & PRICE
  calculatePlanDetails(): void {
    const today = new Date();
    const durationMap: any = {
      Weekly: 7,
      Biweekly: 14,
      Monthly: 30,
      Quarterly: 90,
    };

    const priceMap: any = {
      Weekly: 1000,
      Biweekly: 2000,
      Monthly: 4000,
      Quarterly: 12000,
    };

    const days = durationMap[this.plan];
    this.amount = priceMap[this.plan];

    const end = new Date(today);
    end.setDate(today.getDate() + days);

    this.startDate = today.toISOString().split('T')[0];
    this.endDate = end.toISOString().split('T')[0];
  }

  // ✅ NEW: PLAN FEATURES BASED ON SELECTION
  setPlanFeatures(): void {
    this.planFeatures = [
      'Priority delivery and guaranteed freshness',
      `Access to weekly chef's specials and regional dishes`,
      `Option to track calories and view meal nutrition`,
      `Healthy & Balanced Nutrition`,

      'Customizable meals based on your preferences',
    ];
  }

  // ✅ SUBMIT SUBSCRIPTION
  submitSubscription(): void {
    const payload = {
      userId: this.userId,
      frequency: this.plan,
      startDate: this.startDate,
      endDate: this.endDate,
      amount: this.amount,
      dietType: this.preferences.dietType,
      mealType: this.preferences.mealType,
      spiceLevel: this.preferences.spiceLevel,
      nutritionInfo: this.preferences.nutritionInfo,
      allergens: this.preferences.allergens,
    };

    this.authService.createSubscription(payload).subscribe({
      next: () => {
        sessionStorage.removeItem('selectedPlan');
        sessionStorage.removeItem('subscriptionPreferences');
        alert('Subscription Created Successfully');
        this.router.navigate(['/user-yoursubscriptionplan']);
      },
      error: () => {
        alert('Failed to create subscription');
      },
    });
  }
}
