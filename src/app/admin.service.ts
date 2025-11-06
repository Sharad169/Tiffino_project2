import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AdminService {

  constructor(public http: HttpClient) { }

  private adminBaseUrl = 'http://localhost:8081/api/admins/super-admin/update-password';
    private baseUrl = 'http://localhost:8081/api/admins';

 loginAdmin(data: any) {
  
     return this.http.post(this.adminBaseUrl, data);
  }



 login(email: string, password: string): Observable<any> {
  const url = `${this.baseUrl}/super-admin-login?email=${email}&password=${password}`    
    return this.http.post(url,{});
    }

    
  
  
  


}
