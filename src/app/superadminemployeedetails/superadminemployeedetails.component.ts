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
  this.getEmloyeeDetails(empId);
  }


 getEmloyeeDetails(empId: string | null) {
  if (!empId) {
    return;
  }

  this.api.getEmloyeeById(empId).subscribe({
    next: (res) => {
      console.log("Employee Details:", res);
       this.employee = [res]
    },
    error: (err) => {
      console.error("Error fetching employee:", err);
    }
  });
}





}
