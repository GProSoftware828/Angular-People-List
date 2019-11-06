import { Component, ViewChild } from '@angular/core';
import { Employee } from './Employee';

@Component({
  //moduleId: module.id,
  selector: 'employee-form',
  templateUrl: 'employee.component.html'
})
export class EmployeeComponent {
  //@ViewChild('empForm') empForm: any;

  departments = ['Sales', 'Development', 'Training', 'Accounts', 'HR'];
  emp: Employee = new Employee(324, 'George', 76345, 'Training');

  get diagnostic() {
    return JSON.stringify(this.emp);
  }

  newEmployee() {
    //AJAX
  }

  onSubmit(form: any) {
    alert(form.id.value + ' ' + form.name.value);
    this.emp = new Employee(0, '', 0, '');
    form.reset();
  }
}
