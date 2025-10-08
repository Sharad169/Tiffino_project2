import { Component, OnInit } from '@angular/core';
import { AuthService } from '../service/auth.service';

@Component({
  selector: 'app-add-card',
  standalone: true,
  imports: [],
  templateUrl: './add-card.component.html',
  styleUrl: './add-card.component.css'
})
export class AddCardComponent implements OnInit {

   userId: number = Number(sessionStorage.getItem('userId'));
  cartItems: any[] = [];

  constructor(public api : AuthService) { }
  ngOnInit(): void {
    
    this.loadCart()


  }

    loadCart() {
    this.api.getCartByUserId(this.userId).subscribe({
      next: (cart: any) => {
        // poora object milega yaha
        this.cartItems = cart.items || [];
        console.log('Cart items:', this.cartItems);
      },
      error: (err) => console.error('Error fetching cart:', err)
    });
  }

}
