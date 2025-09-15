import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  apiUrl="http://localhost:8080/api/auth"

  constructor(private http :HttpClient) { }

  
 signup(data: any): Observable<string> {
  return this.http.post(`${this.apiUrl}/register`, data, { responseType: 'text' });
}



 

}
