import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-onboarding',
  templateUrl: './onboarding.component.html',
  styleUrls: ['./onboarding.component.css']
})
export class OnboardingComponent {
  currentStep = 0;

  steps = [
    {
      subtitle: 'From regional Indian flavors to world cuisines, all in one app',
      image: '../assets/onboarding 1.jpg'
    },
    {
      subtitle: 'Choose from daily, weekly or monthly meal plans that fit your life',
      image: '../assets/onboarding 2.jpg'
    },
    {
      subtitle: 'Get real-time updates and enjoy your meals hassle-free.',
      image: '../assets/onboarding 3.png'
    }
  ];

  constructor(private router: Router) {}

  nextStep() {
    if (this.currentStep < this.steps.length - 1) {
      this.currentStep++;
    } else {
      this.router.navigate(['/home']);
    }
  }

  goToStep(index: number) {
    this.currentStep = index;
  }
}
