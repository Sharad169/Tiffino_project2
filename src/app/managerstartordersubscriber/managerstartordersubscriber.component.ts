import { Component, OnInit } from '@angular/core';
import { ManagersidebarComponent } from '../managersidebar/managersidebar.component';
import { Router, ActivatedRoute } from '@angular/router';
import { ManagerService } from '../service/manager.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
@Component({
    selector: 'app-managerstartordersubscriber',
  standalone: true,
  imports: [ManagersidebarComponent, CommonModule, FormsModule],
    templateUrl: './managerstartordersubscriber.component.html',
  styleUrls: ['./managerstartordersubscriber.component.css'],

})

export class ManagerstartordersubscriberComponent implements OnInit {
  orderId: number | null = null;
  userId!: number | null;
  orderDetails: any = null;
  mealDetails: any = null;

  constructor(private router: Router, private route: ActivatedRoute, public api: ManagerService) {}
ngOnInit(): void {
  this.route.paramMap.subscribe(params => {
    const id = params.get('orderId');

    if (!id) {
      console.error('orderId missing');
      return;
    }

    this.orderId = +id;
    const userIdParam = this.route.snapshot.queryParamMap.get('userId');
    const parsedUserId = userIdParam !== null ? Number(userIdParam) : null;
    this.userId = parsedUserId !== null && !isNaN(parsedUserId) ? parsedUserId : null;
      if (this.userId) {
    // Subscriber → subscription API
    this.getActiveSubscription(this.userId);
  } else {
    // Non Subscriber → order API
    this.getOrderDetails(this.orderId);
  }
    this.getOrderDetails();
  });
}

getActiveSubscription(userId: number) {
  this.api.getActiveSub(userId).subscribe(res => {
    console.log('Active Subscription', res);
    this.mealDetails = res;
  });
}



  goToDeliveryPartner() {
    this.router.navigate(['/manager-orderdelpartnerdetails']);
    
  }

  getOrderDetails(orderId?: number) {
    if (this.orderId == null) {
      console.warn('No orderId available');
      return;
    }
    this.api.getOrderById(this.orderId.toString()).subscribe({
      next: (res) => {
        console.log('Order Details:', res);
        this.orderDetails = res;
      },
      error: (err) => {
        console.error(err);
      }
    });
  }
}
