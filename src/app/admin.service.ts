import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AdminService {

  constructor(public http: HttpClient) { }

  private adminBaseUrl = 'http://localhost:8081/api/admins/super-admin/update-password';

 loginAdmin(data: any) {
  
     return this.http.post(this.adminBaseUrl, data);
  }


}
