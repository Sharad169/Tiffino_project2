import { Component, OnInit } from '@angular/core';
import { AuthService } from '../service/auth.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-add-card',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './add-card.component.html',
  styleUrls: ['./add-card.component.css']
})
export class AddCardComponent implements OnInit {

  userId: number = Number(sessionStorage.getItem('userId'));
  cartItems: any[] = [];
  recommendedItems: any[] = [];

  // sidebar data
  couponCode: string = '';
  discount: number = 0;
  deliveryAddress = {
    address: '5, MG Road, Indiranagar, Bengaluru, Karnataka – 560038',
    name: 'Aarav Sharma',
    phone: '1234567899'
  };

  constructor(public api: AuthService) {}

  ngOnInit(): void {
    this.loadCart();
    this.loadRecommendedItems();
  }

  // get user cart from backend
  loadCart() {
    this.api.getCartByUserId(this.userId).subscribe({
      next: (cart: any) => {
        this.cartItems = cart.items || [];
        console.log('Cart items:', this.cartItems);
      },
      error: (err) => console.error('Error fetching cart:', err)
    });
  }

  // recommended static items (can be dynamic from API)
  loadRecommendedItems() {
    this.recommendedItems = [
      {
        title: 'Butter Naan',
        description: 'Soft, fluffy Indian flatbread baked in tandoor, perfect with curries.',
        price: 45,
        image: 'assets/images/butter-naan.jpg'
      },
      {
        title: 'Paneer Masala',
        description: 'Rich creamy paneer curry cooked in tomato-cashew gravy.',
        price: 350,
        image: 'assets/images/paneer-masala.jpg'
      }
    ];
  }

  // quantity controls
  increaseQty(item: any) {
    item.quantity++;
    this.updateCartTotal();
  }

  decreaseQty(item: any) {
    if (item.quantity > 1) {
      item.quantity--;
      this.updateCartTotal();
    }
  }

  clearCart() {
    this.cartItems = [];
    this.updateCartTotal();
  }

  getCartTotal(): number {
    return this.cartItems.reduce(
      (total, item) => total + item.price * item.quantity,
      0
    );
  }

  updateCartTotal() {
    // optional: sync with backend
    this.discount = this.calculateDiscount();
  }

  applyCoupon() {
    if (this.couponCode.trim().toLowerCase() === 'save50') {
      this.discount = 50;
      alert('Coupon applied! You saved Rs 50');
    } else {
      this.discount = 0;
      alert('Invalid coupon code');
    }
  }

  calculateDiscount(): number {
    // simple example logic
    return this.discount;
  }

  addRecommendedToCart(food: any) {
    const existing = this.cartItems.find(item => item.name === food.title);
    if (existing) {
      existing.quantity++;
    } else {
      this.cartItems.push({
        name: food.title,
        description: food.description,
        price: food.price,
        quantity: 1,
        image: food.image
      });
    }
    this.updateCartTotal();
  }

  checkout() {
    alert('Checkout successful! Total: Rs ' + (this.getCartTotal() - this.discount));
  }

  cancelOrder() {
    alert('Order cancelled successfully.');
  }

}
