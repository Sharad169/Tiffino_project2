import { Component, ElementRef, HostListener } from '@angular/core';
import { Sidebar2Component } from '../sidebar2/sidebar2.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-superadminkitchen',
  standalone: true,
  imports: [Sidebar2Component, CommonModule],
  templateUrl: './superadminkitchen.component.html',
  styleUrls: ['./superadminkitchen.component.css'],
})
export class SuperadminkitchenComponent {
  statusOptions = [
    { value: 'assigned', label: 'Assigned' },
    { value: 'not_assigned', label: 'Not Assigned' },
  ];

  stateOptions = [
    { value: 'maharashtra', label: 'Maharashtra' },
    { value: 'karnataka', label: 'Benglore' },
    { value: 'delhi', label: 'Delhi' },
    { value: 'tamilnadu', label: 'Tamil Nadu' },
    { value: 'andhra pradesh', label: 'Andhra Pradesh' },
    { value: 'assam', label: 'Assam' },
    { value: 'bihar', label: 'Bihar' },
    { value: 'chhattisgrah', label: 'Chhattisgrah' },
    { value: 'goa', label: 'Goa' },
    { value: 'gujrat', label: 'Gujrat' },
    { value: 'haryana', label: 'Haryana' },
    { value: 'himachal pradesh ', label: 'Himachal Pradesh' },
    { value: 'jharkhand', label: 'Jharkhand' },
    { value: 'item 11', label: 'Item 11' },
    { value: 'item 12', label: 'Item 12' },
    { value: 'item 12', label: 'Item 12' },
  ];

  selectedStatus: string = '';
  selectedState: string = '';

  isStatusOpen = false;
  isStateOpen = false;

  constructor(private host: ElementRef<HTMLElement>) {}

  toggleStatus(event: MouseEvent) {
    event.stopPropagation();
    this.isStatusOpen = !this.isStatusOpen;
    if (this.isStatusOpen) this.isStateOpen = false;
  }

  toggleState(event: MouseEvent) {
    event.stopPropagation();
    this.isStateOpen = !this.isStateOpen;
    if (this.isStateOpen) this.isStatusOpen = false;
  }

  selectStatus(label: string, event: MouseEvent) {
    event.stopPropagation();
    this.selectedStatus = label;
    this.isStatusOpen = false;
  }

  selectState(label: string, event: MouseEvent) {
    event.stopPropagation();
    this.selectedState = label;
    this.isStateOpen = false;
  }

  // close dropdowns when clicking outside component
  @HostListener('document:click', ['$event'])
  onDocumentClick(ev: MouseEvent) {
    const target = ev.target as Node | null;
    if (!this.host.nativeElement.contains(target)) {
      this.isStatusOpen = false;
      this.isStateOpen = false;
    }
  }
}
