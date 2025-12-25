import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(public http: HttpClient) { }



  private baseUrl = 'http://localhost:8080/api/user';

  private baseAddressUrl = 'http://localhost:8080/api/addresses';
  private baseUrl2 = 'http://localhost:8080/api/addresses/user';
   private baseUrl3 = 'http://localhost:8080/api/addresses';



  getUserById(id: number): Observable<any> {
    const token = sessionStorage.getItem('token');
    const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);
    return this.http.get<any>(`${this.baseUrl}/${id}`, { headers });
  }

  getAddressesByUserId(userId: number): Observable<any> {
    const token = sessionStorage.getItem('token');
    const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);
    return this.http.get(`${this.baseAddressUrl}/user/${userId}`, { headers });
  }

   addAddress(userId: number, addressData: any): Observable<any> {
    const token = sessionStorage.getItem('token');
    const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);
    const url = `${this.baseUrl2}/${userId}`;
    return this.http.post(url, addressData, { headers });
  }


   updateAddress(addressId: number, addressData: any): Observable<any> {
     const token = sessionStorage.getItem('token');
    const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);
    return this.http.put(`${this.baseUrl3}/${addressId}`, addressData, { headers });
  }

  deleteAddress(addressId: number): Observable<any> {
    const token = sessionStorage.getItem('token');
    const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);
  const url = `http://localhost:8080/api/addresses/${addressId}`;
  return this.http.delete(url, { headers });
}



  

 

}
