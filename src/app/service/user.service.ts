import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor( public http : HttpClient) { }



    private baseUrl = 'http://localhost:8080/api/user';

 

  getUserById(id: number): Observable<any> {
    const token = sessionStorage.getItem('token');
        const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);
    return this.http.get<any>(`${this.baseUrl}/${id}`, { headers });
  }
}
