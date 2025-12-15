import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ManagerService {
  private baseUrl = 'http://localhost:8081/api/admins';
  private loginBaseUrl = 'http://localhost:8081/api/admins/login-manager';

  constructor(private http: HttpClient) {}

  // ✅ LOGIN API
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

  // ✅ OTHER API (keep if needed)
  getManagerByCode(managerCode: string): Observable<any> {
    const token = sessionStorage.getItem('token');

    const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);

    return this.http.get<any>(`${this.baseUrl}/manager/${managerCode}`, {
      headers,
    });
  }
}
