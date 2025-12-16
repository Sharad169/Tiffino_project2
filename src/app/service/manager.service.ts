import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ManagerService {

  constructor(public http : HttpClient) { }

  private baseUrl = 'http://localhost:8081/api/admins/login-manager';


  ManagerLogin(managerCode: string, password: string, tempPass: string) {

    const url = `${this.baseUrl}?managerCode=${managerCode}&password=${password}&tempPass=${tempPass}`;
    return this.http.post(url, {});
  }




}
