import { Component, OnInit } from '@angular/core';

import { RouterModule, Router } from '@angular/router';

import { ManagersidebarComponent } from '../managersidebar/managersidebar.component';
import { ManagerService } from '../service/manager.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
 
@Component({

  selector: 'app-managerapproveorder',

  standalone: true,

  imports: [ManagersidebarComponent, RouterModule, CommonModule, FormsModule],

  templateUrl: './managerapproveorder.component.html',

  styleUrls: ['./managerapproveorder.component.css'],

})

export class ManagerapproveorderComponent implements OnInit {

  pendingOrders: any[] = [];
  kitchenCode: string = '';

  // ✅ Constructor should be INSIDE the class

  constructor(private router: Router, public api : ManagerService) {}
  ngOnInit(): void {
    this.kitchenCode = sessionStorage.getItem('kitchenCode') || '';
    this.loadPendingOrders();
  }
 
  // ✅ Function should also be inside the class

 

  // openOrder(order: any) {
  // console.log('Selected Order:', order);
  // }
  // yaha routing ya modal open kar sakta hai


openOrder(orderId: number, userId?: number) {

  // navigation (same for both)
  this.router.navigate(
    ['/managerstartordersubscriber', orderId],
    { queryParams: { userId: userId } } // undefined ho to pass nahi hoga
  );
}


    loadPendingOrders() {
    this.api.getPendingOrders(this.kitchenCode)
      .subscribe({
        next: (res) => {
          this.pendingOrders = res;
          console.log('Orders:', res);
        },
        error: (err) => {
          console.error('API Error', err);
        }
      });
  }
}


 