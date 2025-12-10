import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ManagerService {
  private baseUrl = 'http://localhost:8081/api/admins/login-manager';

  constructor(public http: HttpClient) {}

  login(
    managerCode: string,
    password: string,
    tempPass: string
  ): Observable<any> {
    const url = `${this.baseUrl}/login?managerCode=${managerCode}&Password=${password}&tempPass=${tempPass}`;
    return this.http.post(url, {}); // POST request with empty body
  }
}
