import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ManagerService {
  private adminBaseUrl = 'http://localhost:8081/api/admins';
  private loginBaseUrl = 'http://localhost:8081/api/admins/login-manager';
  private editBaseUrl = 'http://localhost:8081/edit';

  constructor(private http: HttpClient) {}

  // =========================
  // LOGIN / SET PASSWORD
  // =========================
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

  // =========================
  // GET MANAGER DETAILS
  // =========================
  getManagerByCode(managerCode: string): Observable<any> {
    return this.http.get<any>(`${this.adminBaseUrl}/manager/${managerCode}`, {
      headers: this.getAuthHeaders(),
    });
  }

  // =========================
  // UPDATE MANAGER DETAILS
  // =========================
  updateManagerDetails(
    managerCode: string,
    formData: FormData
  ): Observable<any> {
    return this.http.post(`${this.editBaseUrl}/${managerCode}`, formData, {
      headers: this.getAuthHeaders(),
      responseType: 'text',
    });
  }

  // =========================
  // AUTH HEADER
  // =========================
  private getAuthHeaders(): HttpHeaders {
    const token = sessionStorage.getItem('token');
    return new HttpHeaders({
      Authorization: `Bearer ${token}`,
    });
  }
}
