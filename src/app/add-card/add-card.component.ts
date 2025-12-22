import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AuthService } from '../service/auth.service';
import { UserService } from '../service/user.service';
import { Router } from '@angular/router';
 
 
@Component({
  selector: 'app-add-card',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './add-card.component.html',
  styleUrls: ['./add-card.component.css'],
})
export class AddCardComponent implements OnInit {
  cartItems: any[] = [];
  recommendedItems: any[] = [];
  addresses: any[] = [];
  deliveryAddress: any = null;
  showAddressSelector = false;
  couponCode: string = '';
  cartSummary: any;
 
 
  constructor(public api: AuthService, public api1: UserService,private router: Router) {}
 
  ngOnInit(): void {
    this.loadCartFromAPI();
    this.loadRecommendedItems();
    this.loadAddresses();
  }
 
  loadCartFromAPI() {
    const userIdStr = sessionStorage.getItem('userId');
    if (!userIdStr) {
      console.error('User not logged in');
      return;
    }
 
    const userId = Number(userIdStr);
 
    this.api.getCartByUserId(userId).subscribe({
      next: (res: any) => {
        console.log('Cart Response:', res);
 
        this.cartSummary = res;
      this.couponCode = res.couponCode || '';
        // map backend items → UI format
        this.cartItems = res.items.map((item: any) => ({
        mealId: item.mealId,
        name: item.mealName,
        price: item.price,
        individualUnitPrice: item.individualUnitPrice,
        quantity: item.quantity,
        image: item.mealImg,
        description: item.mealDesc
 
      }));
      },
      error: (err) => {
        console.error('Failed to load cart', err);
      },
    });
  }
 
  increaseQty(item: any) {
    const userId = Number(sessionStorage.getItem('userId'));
 
    this.api.addToCart(userId, item.mealId, 1).subscribe(() => {
      this.loadCartFromAPI(); // refresh cart
    });
  }
 
  decreaseQty(item: any) {
    const userId = Number(sessionStorage.getItem('userId'));
 
    this.api.removeFromCart(userId, item.mealId).subscribe(() => {
      this.loadCartFromAPI();
    });
  }
 
  clearCart() {
    const userId = Number(sessionStorage.getItem('userId'));
 
    this.api.clearCart(userId).subscribe(() => {
      this.cartItems = [];
      this.cartSummary = null;
    });
  }
 
  getTotalItemCount(): number {
  return this.cartItems.reduce((sum, item) => sum + item.quantity, 0);
}
 
 loadRecommendedItems() {
  this.api.getAllMeals().subscribe({
    next: (res) => {
      this.recommendedItems = res.map((meal: any) => ({
        mealId: meal.mealId,
        title: meal.name,
        description: meal.description,
        price: meal.price,
        image: meal.imageUrl
      }));
    },
    error: (err) => {
      console.error('Failed to load meals', err);
    }
  });
}
  // ===== Add from Recommended Section =====
  addRecommendedToCart(food: any) {
  if (food.adding) return; // ⛔ prevent double click
 
  const userId = Number(sessionStorage.getItem('userId'));
  if (!userId || !food.mealId) return;
 
  food.adding = true; // 🔒 lock button
 
  this.api.addToCart(userId, food.mealId, 1).subscribe({
    next: () => {
      this.loadCartFromAPI(); // ✅ refresh cart
    },
    error: (err) => {
      console.error('Failed to add item', err);
      food.adding = false; // 🔓 unlock on error
    },
    complete: () => {
      setTimeout(() => {
        food.adding = false; // 🔓 unlock after 500ms
      }, 500);
    },
  });
}
 
 
 
  cancelOrder() {
    alert('Order cancelled successfully.');
  }
 
  loadAddresses() {
    const userIdStr = sessionStorage.getItem('userId');
    if (!userIdStr) {
      console.error('User ID not found in session storage.');
      return;
    }
    const userId = Number(userIdStr);
    if (Number.isNaN(userId)) {
      console.error(
        'User ID in session storage is not a valid number:',
        userIdStr
      );
      return;
    }
    this.api1.getAddressesByUserId(userId).subscribe((data) => {
      console.log(data);
      this.addresses = data || [];
 
    if (this.addresses.length > 0) {
    this.deliveryAddress = this.deliveryAddress ?? this.addresses[0];
  } else {
    this.deliveryAddress = null;
  }
    });
  }
 
  openAddressSelector() {
  this.showAddressSelector = true;
}
 
 selectAddress(address: any) {
  this.deliveryAddress = address;
  this.showAddressSelector = false;
}
goToAddAddress() {
  this.router.navigate(['/address-page']);
}
 
applyCouponCode() {
  const userId = Number(sessionStorage.getItem('userId'));
  if (!userId || !this.couponCode) return;
 
  this.api.applyCoupon(userId, this.couponCode).subscribe({
    next: (res: any) => {
       alert(res)
      this.loadCartFromAPI(); // refresh cart totals
    },
    error: (err) => {
      console.error('Failed to apply coupon', err);
      alert('Invalid or expired coupon!');
    },
  });
}
 
removeCouponCode() {
  const userId = Number(sessionStorage.getItem('userId'));
  if (!userId) return;
 
   this.api.removeCoupon(userId).subscribe({
    next: (res: string) => {
      alert(res);
      this.couponCode = '';
      this.loadCartFromAPI();
    },
    error: (err) => {
      alert(err.error || 'Failed to remove coupon!');
    }
  });
}
 
checkoutOrder() {
  const userId = Number(sessionStorage.getItem('userId'));
 
  if (!userId) {
    alert('User not logged in');
    return;
  }
 
  if (!this.cartItems || this.cartItems.length === 0) {
    alert('Your cart is empty');
    return;
  }
 
  if (!this.deliveryAddress) {
    alert('Please add or select a delivery address');
    return;
  }
 
  const addressId = this.deliveryAddress.id;
 
  this.api.checkout(userId, addressId).subscribe({
    next: (res) => {
      alert('Order placed successfully 🎉');
      console.log('Order response:', res);
 
    },
    error: (err) => {
      console.error(err);
      alert(err.error?.message || 'Checkout failed');
    }
  });
}
 
}
 
 