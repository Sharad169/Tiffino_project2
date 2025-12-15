import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SuperadminSidebarComponent } from '../superadmin-sidebar/superadmin-sidebar.component';
import { AdminService } from '../admin.service';
import { ActivatedRoute } from '@angular/router';
 
@Component({
  selector: 'app-superadminkitchendetails',
  standalone: true,
  imports: [CommonModule, SuperadminSidebarComponent],
  templateUrl: './superadminkitchendetails.component.html',
  styleUrls: ['./superadminkitchendetails.component.css'],
})
export class SuperadminkitchendetailsComponent implements OnInit {
  dropdownOpen = false;
  selectedOption = '';
  amount: string | null = null;
  kitchen: any[] | null = null;
 
  options = ['Per Month', 'Per Annum', 'Per Quarter'];
 
  toggleDropdown(event: MouseEvent) {
    // ✅ Toggle dropdown visibility
    this.dropdownOpen = !this.dropdownOpen;
    event.stopPropagation();
  }
 
  selectOption(option: string, event: MouseEvent) {
    this.selectedOption = option;
 
    // ✅ Set amount based on selected option
    if (option === 'Per Month') {
      this.amount = '2,00,000';
    } else if (option === 'Per Annum') {
      this.amount = '24,00,000';
    } else if (option === 'Per Quarter') {
      this.amount = '6,00,000';
    }
 
    // ✅ Hide dropdown immediately after click
    this.dropdownOpen = false;
    event.stopPropagation();
  }
 
  constructor(public api: AdminService, private router: ActivatedRoute) {
    // ✅ Close dropdown when clicking outside
    document.addEventListener('click', () => {
      this.dropdownOpen = false;
    });
  }
  ngOnInit(): void {
  const kitchenCode = this.router.snapshot.paramMap.get('kitchenCode');
  this.getKitchenDetails(kitchenCode);
  }


getKitchenDetails(kitchenCode: string | null) {
  if (!kitchenCode) {
    this.kitchen = null;
    return;
  }
  this.api.getKitchenById(kitchenCode).subscribe((res) => {
    this.kitchen = [res];
    console.log( this.kitchen);
    
  });
}

}
 
 