import { Component } from '@angular/core';
import { Employee } from './Employee';

@Component({
  //moduleId: module.id,
  selector: 'employee-form',
  templateUrl: 'employee.component.html'
})
export class EmployeeComponent {
  departments = ['Sales', 'Development', 'Training', 'Accounts', 'HR'];
  emp: Employee = new Employee(324, 'George', 76345, 'Training');

  get diagnostic() {
    return JSON.stringify(this.emp);
  }
}
