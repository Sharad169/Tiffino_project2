import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ManagersidebarComponent } from '../managersidebar/managersidebar.component';

@Component({
  selector: 'app-manager-status',
  standalone: true,
  imports: [CommonModule, ManagersidebarComponent],
  templateUrl: './manager-status.component.html',
  styleUrls: ['./manager-status.component.css'],
})
export class ManagerStatusComponent {
  // ROLE (set based on login)
  role: 'manager' | 'delivery' = 'manager';

  isSubscriber: boolean = true;

  steps = [
    {
      name: 'Preparing Food',
      status: 'PENDING',
      completed: false,
      locked: false,
    },
    {
      name: 'At Pickup Point',
      status: 'PENDING',
      completed: false,
      locked: false,
    },
    {
      name: 'Order Picked',
      status: 'PENDING',
      completed: false,
      locked: false,
    },
    { name: 'On the way', status: 'PENDING', completed: false, locked: false },
    { name: 'DELIVERED', status: 'Waiting', completed: false, locked: true },
  ];

  progressFill: number = 0;

  // MANAGER UPDATES STEPS 0–3 ONLY
  updateStepStatus(index: number) {
    // ❌ BLOCK MANAGER FROM STEP 4
    if (this.role === 'manager' && index === 4) return;

    // Prevent executing next step without previous
    if (index > 0 && !this.steps[index - 1].completed) return;

    this.steps[index].completed = true;
    this.steps[index].status = 'COMPLETED';
    this.steps[index].locked = true;

    if (index < this.steps.length - 1) {
      this.steps[index + 1].locked = false;
    }

    this.calculateProgress();
  }

  // DELIVERY PARTNER COMPLETES STEP 4
  completeDelivery() {
    // ❌ Block manager
    if (this.role !== 'delivery') return;

    this.steps[4].completed = true;
    this.steps[4].status = 'COMPLETED';
    this.steps[4].locked = true;

    this.calculateProgress();
  }

  calculateProgress() {
    const completedCount = this.steps.filter((s) => s.completed).length;
    this.progressFill = completedCount * 20;
  }
}
