import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  apiUrl="http://localhost:8080/api/auth"
    private baseUrl = 'http://localhost:8080/api/auth/login';

    private baseUrl1= "http://localhost:8082/api/cuisines/all"

  constructor(private http :HttpClient) { }

  
 signup(data: any): Observable<string> {
  return this.http.post(`${this.apiUrl}/register`, data, { responseType: 'text' });
}

  sendOtp(email: string): Observable<any> {
  return this.http.post(
    `${this.baseUrl}/request-otp?email=${email}`,
    {},
    { responseType: 'text' }  // 👈 Important
  );
}

  // Verify OTP
  verifyOtp(payload: { email: string; otp: string }): Observable<any> {
    // example: if backend has /verify-otp endpoint
    return this.http.post(`${this.baseUrl}/verify-otp`, payload);
  }

  homeData(){
    const token = sessionStorage.getItem('token');
    const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);
    return this.http.get(`${this.baseUrl1}`, { headers });
  }

  getmealbycaterogy(category: string){
    const token = sessionStorage.getItem('token');
    const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);
    return this.http.get(`http://localhost:8082/api/cuisines/category/${category}/with-meals`, { headers });
  }

  

 

}
