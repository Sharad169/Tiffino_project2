import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { SuperadminSidebarComponent } from '../superadmin-sidebar/superadmin-sidebar.component';
import { AdminService } from '../admin.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-superadminemployeedetails',
  standalone: true,
  imports: [ CommonModule, SuperadminSidebarComponent ],
  templateUrl: './superadminemployeedetails.component.html',
  styleUrl: './superadminemployeedetails.component.css'
})
export class SuperadminemployeedetailsComponent implements OnInit {

   employee: any[] | null = null;

  constructor(public api : AdminService, private router : ActivatedRoute) { }


  ngOnInit(): void {
    const empId = this.router.snapshot.paramMap.get('empId');
    const role = this.router.snapshot.paramMap.get('role');
  this.getEmloyeeDetails(empId, role || undefined);
  }


getEmloyeeDetails(empId: string | null, role?: string) {
  debugger
  if (!empId || !role) {
    return;
  }

    let request$;

  // Role ke basis pe service call
  if (role.toLowerCase() === 'manager') {
    request$ = this.api.getEmloyeeById(empId);
  } else if (role.toLowerCase() === 'chef') {
    request$ = this.api.getChefById(empId);
  }else if (role.toLowerCase() === 'delivery partner') {
    request$ = this.api.getDeliveryPartnerById(empId);
  }
     else {
    console.warn('Unknown role:', role);
    return;
  }

  // API call execute karna
console.log('Request Observable:', request$);
request$?.subscribe({
  next: (res) => {
    console.log("Employee Details:", res);
    this.employee = [res];
  },
  error: (err) => {
    console.error("Error fetching employee:", err);
  }
});

}






}
