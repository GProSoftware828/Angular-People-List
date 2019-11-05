import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Person } from './Person';

@Component({
  selector: 'person-component',
  template: `
    <form>
      First Name:
      <input
        type="text"
        name="firstName"
        [(ngModel)]="person.firstName"
      /><br />
      Last Name:
      <input
        type="text"
        name="lastName"
        [ngModel]="person.lastName"
        (ngModelChange)="person.lastName = changeToUppercase($event)"
      /><br />
    </form>

    <form>
      First Name:
      <input
        type="text"
        name="firstName"
        [ngModel]="firstName"
        (ngModelChange)="changeFirstName($event)"
      /><br />
      Last Name:
      <input
        type="text"
        name="lastName"
        [ngModel]="lastName"
        (ngModelChange)="changeLastName($event)"
      /><br />
    </form>
    Hello {{ firstName + ' ' + lastName }}
  `
})
export class PersonComponent {
  @Input() firstName: string;
  @Input() lastName: string;

  @Output() firstNameChange = new EventEmitter<string>();
  @Output() lastNameChange = new EventEmitter<string>();

  changeFirstName(fn: string) {
    this.firstName = fn;
    this.firstNameChange.emit(fn);
  }

  changeLastName(ln: string) {
    this.lastName = ln;
    this.lastNameChange.emit(ln);
  }

  person: Person;
  constructor() {
    this.person = new Person(this.firstName, this.lastName);
  }
  changeToUppercase(value: string): string {
    return value.toUpperCase();
  }
}
