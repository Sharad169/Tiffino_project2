import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ManagerService {

  constructor(public http : HttpClient) { }

  private baseUrl = 'http://localhost:8081/api/admins/login-manager';
   private loginBaseUrl = 'http://localhost:8081/api/admins/login-manager';
   private adminBaseUrl = 'http://localhost:8081/api/admins';
   private editBaseUrl = 'http://localhost:8081/edit';


  ManagerLogin(managerCode: string, password: string) {

    const url = `${this.baseUrl}?managerCode=${managerCode}&password=${password}`;
    return this.http.post(url, {});
  }


  login(
    managerCode: string,
    password: string,
    tempPass: string
  ): Observable<any> {
    const url =
      `${this.loginBaseUrl}/login` +
      `?managerCode=${managerCode}` +
      `&Password=${password}` +
      `&tempPass=${tempPass || ''}`;
 
    return this.http.post<any>(url, {});
  }

  getManagerByCode(managerCode: string): Observable<any> {
     const token = sessionStorage.getItem('token');
        const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);

    return this.http.get<any>(`${this.adminBaseUrl}/manager/${managerCode}`, {headers});
  }

  updateManagerDetails(managerCode: string, formData: FormData): Observable<any> {
    const token = sessionStorage.getItem('token');
        const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);
    return this.http.post(`${this.editBaseUrl}/${managerCode}`, formData, { headers    });
  }

  
  
  getPendingOrders(kitchenCode: string): Observable<any> {
    const token = sessionStorage.getItem('token');
        const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);
    return this.http.get<any>(`http://localhost:8083/api/orders/Kitchen/PENDING?KitchenCode=${kitchenCode}`, { headers });
  }

  getOrderById(orderId: string) {
  const token = sessionStorage.getItem('token');
  const headers = new HttpHeaders().set(
    'Authorization',
    `Bearer ${token}`
  );

  return this.http.get(
    `http://localhost:8083/api/orders/${orderId}`,
    { headers }
  );
}

getActiveSub(userId: number) {
   const token = sessionStorage.getItem('token');
        const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);
  return this.http.get(
    `http://localhost:8086/api/subscriptions/userId/active-sub/${userId}`
    , { headers }
  );
}


}
