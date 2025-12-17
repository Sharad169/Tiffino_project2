import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { get } from 'http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AdminService {
  constructor(public http: HttpClient) {}

  private adminBaseUrl =
    'http://localhost:8081/api/admins/super-admin/update-password';
  private baseUrl = 'http://localhost:8081/api/admins';
  private baseUrl1 = 'http://localhost:8081/api/kitchens';
  private baseUrl2 = ' http://localhost:8081';
  private baseUrl3 = 'http://localhost:8081/api';
  private apiUrl4 = 'http://localhost:8081/api/admins';
  private apiUrl5 = 'http://localhost:8081/api';
  private apiUrl6 = 'http://localhost:8081/api/kitchens';
  private baseUrl7 = 'http://localhost:8082/api/cuisines';
  private apiUrl8 = 'http://localhost:8082/api';
  private apiUrl9 = 'http://localhost:8082/api/cuisines/all';
  private editApi = 'http://localhost:8081/edit';

  loginAdmin(data: any) {
    return this.http.post(this.adminBaseUrl, data);
  }

  login(email: string, password: string): Observable<any> {
    const url = `${this.baseUrl}/super-admin-login?email=${email}&password=${password}`;
    return this.http.post(url, {});
  }

  addKitchen(data: any): Observable<any> {
    const token = sessionStorage.getItem('token');
    const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);

    return this.http.post(this.baseUrl1, data, { headers });
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
    return this.http.post(`${this.baseUrl2}/api/admins/managers`, formData, {
      headers,
    });
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
    return this.http.get(this.apiUrl5 + '/kitchens/all', { headers });
  }

  showAllEmployees(): Observable<any> {
    const token = sessionStorage.getItem('token');
    const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);
    return this.http.get(this.apiUrl6 + '/All/Employees', { headers });
  }

  getKitchenById(kitchenCode: string): Observable<any> {
    const token = sessionStorage.getItem('token');
    const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);
    return this.http.get(`${this.apiUrl6}/kitchen-code/${kitchenCode}`, {
      headers,
    });
  }

  getEmloyeeById(code: string): Observable<any> {
    const token = sessionStorage.getItem('token');
    const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);
    return this.http.get(`${this.apiUrl4}/manager/${code}`, { headers });
  }

  getChefById(code: string): Observable<any> {
    const token = sessionStorage.getItem('token');
    const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);
    return this.http.get(`${this.baseUrl3}/chefs/${code}`, { headers });
  }

  getDeliveryPartnerById(code: string): Observable<any> {
    const token = sessionStorage.getItem('token');
    const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);
    return this.http.get(`${this.baseUrl3}/delivery-partner/${code}`, {
      headers,
    });
  }

  addCuisine(data: any): Observable<any> {
    const token = sessionStorage.getItem('token');
    const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);
    return this.http.post(this.baseUrl7, data, { headers });
  }

  addMeal(formData: FormData) {
    const token = sessionStorage.getItem('token');
    const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);

    return this.http.post('http://localhost:8082/api/meals', formData, {
      headers,
    });
  }

  allCuisins() {
    const token = sessionStorage.getItem('token');
    const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);
    return this.http.get(this.apiUrl9, { headers });
  }
  // ================= EDIT REQUESTS (SUPER ADMIN) =================
  // 🔴 THIS IS WHAT YOU NEEDED FOR THE LIST PAGE
  getAllEditRequests(): Observable<any[]> {
    return this.http.get<any[]>(`${this.editApi}/all-requests`, {
      headers: this.getAuthHeaders(),
    });
  }
  // ================= COMMON =================
  private getAuthHeaders(): HttpHeaders {
    const token = sessionStorage.getItem('token');
    return new HttpHeaders({
      Authorization: `Bearer ${token}`,
    });
  }
}
