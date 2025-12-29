import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CommonModule } from '@angular/common';
import { SidebarComponent } from '../sidebar/sidebar.component';
import { AuthService } from '../service/auth.service';

@Component({
  selector: 'app-user-subscriptionplandetails',
  standalone: true,
  imports: [CommonModule, SidebarComponent],
  templateUrl: './user-subscriptionplandetails.component.html',
  styleUrl: './user-subscriptionplandetails.component.css',
})
export class UserSubscriptionplandetailsComponent implements OnInit {
  subscriptionId!: number;
  subscription: any = null;

  constructor(
    private route: ActivatedRoute,
    private authService: AuthService
  ) {}

  ngOnInit(): void {
    this.subscriptionId = Number(
      this.route.snapshot.paramMap.get('subscriptionId')
    );

    if (!this.subscriptionId) {
      console.error('Subscription ID missing');
      return;
    }

    this.loadSubscriptionDetails();
  }

  loadSubscriptionDetails(): void {
    this.authService.getSubscriptionById(this.subscriptionId).subscribe({
      next: (response) => {
        this.subscription = response;
      },
      error: (err) => {
        console.error('Failed to load subscription details', err);
      },
    });
  }
}
