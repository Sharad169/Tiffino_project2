import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ManagerService {

  constructor(public http : HttpClient) { }

  private baseUrl = 'http://localhost:8081/api/admins/login-manager';
   private loginBaseUrl = 'http://localhost:8081/api/admins/login-manager';


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



}
