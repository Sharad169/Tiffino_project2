import { Component, ElementRef, HostListener, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SuperadminSidebarComponent } from '../superadmin-sidebar/superadmin-sidebar.component';
import { FormsModule } from '@angular/forms';
import { AdminService } from '../admin.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-superadminkitchen',
  standalone: true,
  imports: [SuperadminSidebarComponent, CommonModule, FormsModule],
  templateUrl: './superadminkitchen.component.html',
  styleUrls: ['./superadminkitchen.component.css'],
})
export class SuperadminkitchenComponent implements OnInit {
  kitchenList: any[] = [];
  filteredKitchens: any[] = [];
  selectedStatus: string = '';
  selectedState: string = '';
  isStatusOpen: boolean = false;
  isStateOpen: boolean = false;

  constructor(
    private host: ElementRef<HTMLElement>,
    public api: AdminService,
    private router: Router
  ) {}
  ngOnInit(): void {
    this.allKitchen();
  }

  allKitchen() {
    debugger;
    this.api.showAllKitchens().subscribe({
      next: (res) => {
        this.kitchenList = res;
        this.filteredKitchens = res;
        console.log('kitchen', this.kitchenList);
      },
      error: () => {
        alert('Failed to load kitchens');
      },
    });
  }

  filterStatus(status: string) {
    this.selectedStatus = status;
    this.isStatusOpen = false; // close dropdown after selection

    if (status === 'ASSIGNED') {
      this.filteredKitchens = this.kitchenList.filter(
        (k) => k.status === 'ASSIGNED'
      );
    } else {
      this.filteredKitchens = this.kitchenList.filter(
        (k) => k.status !== 'ASSIGNED'
      );
    }
  }

  filterState(state: string) {
    this.selectedState = state;
    this.isStateOpen = false; // close dropdown after selection

    // Filter dynamically, case-insensitive
    this.filteredKitchens = this.kitchenList.filter(
      (k) => k.state?.trim().toLowerCase() === state.toLowerCase()
    );
  }

  toggleStatus() {
    this.isStatusOpen = !this.isStatusOpen;
  }

  toggleState() {
    this.isStateOpen = !this.isStateOpen;
  }

  viewKitchenDetails(kitchenCode: string) {
    // Navigate to kitchen details page
    this.router.navigate(['/superadminkitchendetails', kitchenCode]);
  }
}
