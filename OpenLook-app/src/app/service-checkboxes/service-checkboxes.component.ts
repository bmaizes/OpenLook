import { Component, Input } from '@angular/core';

interface Service {
  id: string;
  name: string;
  // Add other properties if needed
}

@Component({
  selector: 'app-service-checkboxes',
  templateUrl: './service-checkboxes.component.html',
  styleUrls: ['./service-checkboxes.component.css']
})
export class ServiceCheckboxesComponent {
  @Input() services: { [key: string]: Service; } | undefined;
  selectedServiceIds: string[] = [];

  toggleService(serviceId: string): void {
    console.log("hit me")
    const index = this.selectedServiceIds.indexOf(serviceId);
    console.log(index)
    if (index === -1) {
      this.selectedServiceIds.push(serviceId);
    } else {
      this.selectedServiceIds.splice(index, 1);
    }
    console.log(this.selectedServiceIds)

  }
}
