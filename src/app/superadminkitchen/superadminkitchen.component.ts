import { Component, ElementRef, HostListener, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SuperadminSidebarComponent } from '../superadmin-sidebar/superadmin-sidebar.component';
import { FormsModule } from '@angular/forms';
import { AdminService } from '../admin.service';
 
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


  // statusOptions = [
  //   { value: 'assigned', label: 'Assigned' },
  //   { value: 'not_assigned', label: 'Not Assigned' },
  // ];
 
  // stateOptions = [
  //   { value: 'maharashtra', label: 'Maharashtra' },
  //   { value: 'karnataka', label: 'Benglore' },
  //   { value: 'delhi', label: 'Delhi' },
  //   { value: 'tamilnadu', label: 'Tamil Nadu' },
  //   { value: 'andhra pradesh', label: 'Andhra Pradesh' },
  //   { value: 'assam', label: 'Assam' },
  //   { value: 'bihar', label: 'Bihar' },
  //   { value: 'chhattisgrah', label: 'Chhattisgrah' },
  //   { value: 'goa', label: 'Goa' },
  //   { value: 'gujrat', label: 'Gujrat' },
  //   { value: 'haryana', label: 'Haryana' },
  //   { value: 'himachal pradesh ', label: 'Himachal Pradesh' },
  //   { value: 'jharkhand', label: 'Jharkhand' },
  //   { value: 'item 11', label: 'Item 11' },
  //   { value: 'item 12', label: 'Item 12' },
  //   { value: 'item 12', label: 'Item 12' },
  // ];
 
  // selectedStatus: string = '';
  // selectedState: string = '';
 
  // isStatusOpen = false;
  // isStateOpen = false;
 
  constructor(private host: ElementRef<HTMLElement>, public api : AdminService) {}
  ngOnInit(): void {
    this.allKitchen();
  }
 
  // toggleStatus(event: MouseEvent) {
  //   event.stopPropagation();
  //   this.isStatusOpen = !this.isStatusOpen;
  //   if (this.isStatusOpen) this.isStateOpen = false;
  // }
 
  // toggleState(event: MouseEvent) {
  //   event.stopPropagation();
  //   this.isStateOpen = !this.isStateOpen;
  //   if (this.isStateOpen) this.isStatusOpen = false;
  // }
 
  // selectStatus(label: string, event: MouseEvent) {
  //   event.stopPropagation();
  //   this.selectedStatus = label;
  //   this.isStatusOpen = false;
  // }
 
  // selectState(label: string, event: MouseEvent) {
  //   event.stopPropagation();
  //   this.selectedState = label;
  //   this.isStateOpen = false;
  // }
 
  // close dropdowns when clicking outside component
  // @HostListener('document:click', ['$event'])
  // onDocumentClick(ev: MouseEvent) {
  //   const target = ev.target as Node | null;
  //   if (!this.host.nativeElement.contains(target)) {
  //     this.isStatusOpen = false;
  //     this.isStateOpen = false;
  //   }
  // }


  allKitchen() {
  this.api.showAllKitchens().subscribe({
    next: (res) => {
      this.kitchenList = res;
      this.filteredKitchens = res; 
      console.log("kitchen", this.kitchenList);
      
    },
    error: () => {
      alert("Failed to load kitchens");
    }
  });
}

filterStatus(status: string) {
  this.selectedStatus = status;
  this.isStatusOpen = false; // close dropdown after selection

  if (status === 'ASSIGNED') {
    this.filteredKitchens = this.kitchenList.filter(k => k.status === 'ASSIGNED');
  } else {
    this.filteredKitchens = this.kitchenList.filter(k => k.status !== 'ASSIGNED');
  }
}

filterState(state: string) {
  this.selectedState = state;
  this.isStateOpen = false; // close dropdown after selection

  // Filter dynamically, case-insensitive
  this.filteredKitchens = this.kitchenList.filter(k => 
    k.state?.trim().toLowerCase() === state.toLowerCase()
  );
}

toggleStatus() {
  this.isStatusOpen = !this.isStatusOpen;
}

toggleState() {
  this.isStateOpen = !this.isStateOpen;
}



}
 
 
