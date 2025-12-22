import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
 
@Injectable({
  providedIn: 'root',
})
export class AuthService {
  apiUrl = 'http://localhost:8080/api/auth';
  private baseUrl = 'http://localhost:8080/api/auth/login';
  private baseUrl1 = 'http://localhost:8082/api/cuisines/all';
 
  // ✅ CORRECT CART BASE URL
  private cartUrl = 'http://localhost:8083/api/cart';
 
  constructor(private http: HttpClient) {}
 
  // ================= COMMON HEADER =================
  private getAuthHeaders(): HttpHeaders {
    const token = sessionStorage.getItem('token');
    return new HttpHeaders().set('Authorization', `Bearer ${token}`);
  }
 
  // ================= AUTH =================
  signup(data: any): Observable<string> {
    return this.http.post(`${this.apiUrl}/register`, data, {
      responseType: 'text',
    });
  }
 
  sendOtp(email: string): Observable<any> {
    return this.http.post(
      `${this.baseUrl}/request-otp?email=${email}`,
      {},
      { responseType: 'text' }
    );
  }
 
  verifyOtp(payload: { email: string; otp: string }): Observable<any> {
    return this.http.post(`${this.baseUrl}/verify-otp`, payload);
  }
 
  // ================= HOME =================
  homeData() {
    return this.http.get(`${this.baseUrl1}`, {
      headers: this.getAuthHeaders(),
    });
  }
 
  getmealbycaterogy(category: string) {
    return this.http.get(
      `http://localhost:8082/api/cuisines/category/${category}/with-meals`,
      { headers: this.getAuthHeaders() }
    );
  }
 
  // =====================================================
  // ================= CART APIs =========================
  // =====================================================
 
  // ✅ VIEW CART
  getCartByUserId(userId: number): Observable<any> {
    return this.http.get(`${this.cartUrl}/${userId}`, {
      headers: this.getAuthHeaders(),
    });
  }
 
  // ✅ ADD ITEM (Add button & PLUS icon)
  addToCart(userId: number, mealId: number, quantity: number): Observable<any> {
    const body = { mealId, quantity };
 
    return this.http.post(`${this.cartUrl}/${userId}/add`, body, {
      headers: this.getAuthHeaders(),
    });
  }
 
  // ✅ REMOVE ITEM (MINUS icon)
  removeFromCart(userId: number, mealId: number): Observable<any> {
    return this.http.delete(`${this.cartUrl}/${userId}/remove/${mealId}`, {
      headers: this.getAuthHeaders(),
    });
  }
 
  // ✅ CLEAR CART
  clearCart(userId: number): Observable<any> {
    return this.http.delete(`${this.cartUrl}/${userId}/clear`, {
      headers: this.getAuthHeaders(),
    });
  }
 
  getAllMeals(): Observable<any[]> {
  return this.http.get<any[]>(
    'http://localhost:8082/api/meals/all',
    { headers: this.getAuthHeaders() }
  );
}
 
// ================= CART COUPON APIs =================
 
// Apply coupon
applyCoupon(userId: number, couponCode: string): Observable<any> {
  return this.http.post(
    `${this.cartUrl}/ApplyCoupon/${userId}/${couponCode}`,
    {},
    { headers: this.getAuthHeaders(), responseType: 'text'}
  );
}
 
// Remove coupon
removeCoupon(userId: number): Observable<any> {
  return this.http.post(
    `${this.cartUrl}/RemoveCoupon/${userId}`,
    {},
    { headers: this.getAuthHeaders(), responseType: 'text'}
  );
}
checkout(userId: number, addressId: number): Observable<any> {
  return this.http.post(
    `${this.cartUrl}/${userId}/checkout?AddressId=${addressId}`,
    {},
    { headers: this.getAuthHeaders() }
  );
}
}
 
 