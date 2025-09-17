import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  apiUrl="http://localhost:8080/api/auth"
    private baseUrl = 'http://localhost:8080/api/auth/login';

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

  

 

}
