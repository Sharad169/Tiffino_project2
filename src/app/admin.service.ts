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
      private baseUrl1 = 'http://localhost:8081/api/kitchens';
      private baseUrl2 =" http://localhost:8081";
      private baseUrl3 = "http://localhost:8081/api";
      private apiUrl = "http://localhost:8081/api/admins/super-admin/delivery-partners";
      private apiUrl5 = "http://localhost:8081/api"
      private apiUrl6 = "http://localhost:8081/api/kitchens"
 

 loginAdmin(data: any) {
  
     return this.http.post(this.adminBaseUrl, data);
  }



 login(email: string, password: string): Observable<any> {
  const url = `${this.baseUrl}/super-admin-login?email=${email}&password=${password}`    
    return this.http.post(url,{});
    }

      addKitchen(data: any): Observable<any> {
      const token = sessionStorage.getItem('token');
    const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);

    return this.http.post(this.baseUrl1, data, { headers});
  }


// addManager(managerData: any, uploadedFiles: any): Observable<any> {
//   const token = sessionStorage.getItem('token');
//     const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);
//   const formData = new FormData();

//   // Append text fields
//   const textFields = ['name','email','dob','phone','kitchenId','bankAccount','permAddress','currAddress'];
//   textFields.forEach(field => {
//     if (managerData[field]) {
//       formData.append(field, managerData[field]);
//     }
//   });

//   // Append files only if they exist
//   const fileFields = ['photo','aadhar','panCard','chequeBook'];
//   fileFields.forEach(field => {
//     const file = uploadedFiles[field]?.file;
//     if (file) {
//       formData.append(field, file); // only append if file exists
//     }
//   });

//   // Send POST request
//   return this.http.post(`${this.baseUrl2}/managers`, formData, { headers });
// }

// admin.service.ts
addManager(formData: FormData) {

   const token = sessionStorage.getItem('token');
    const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);
  return this.http.post(`${this.baseUrl2}/api/admins/managers`, formData, { headers });
}


addChef(formData: FormData) {

   const token = sessionStorage.getItem('token');
    const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);
  return this.http.post(`${this.baseUrl3}/chefs`, formData, { headers });
}

// registerDeliveryPartner(formData: FormData): Observable<any> {
//     const token = sessionStorage.getItem('token');
//     const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);
//     return this.http.post(this.apiUrl, formData, { headers });
//   }


showAllKitchens(): Observable<any> {
   const token = sessionStorage.getItem('token');
    const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);
  return this.http.get(this.apiUrl5+"/kitchens/all", { headers });
}

showAllEmployees(): Observable<any> {
   const token = sessionStorage.getItem('token');
    const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);
  return this.http.get(this.apiUrl6+"/All/Employees", { headers });
}

}
 

    
  
  
  



