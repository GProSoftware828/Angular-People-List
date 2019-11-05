import { Component, Input } from '@angular/core';
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
      <input type="text" name="firstName" [ngModel]="firstName" /><br />
      Last Name:
      <input type="text" name="lastName" [ngModel]="lastName" /><br />
    </form>
    Hello {{ firstName + ' ' + lastName }}
  `
})
export class PersonComponent {
  @Input() firstName: string;
  @Input() lastName: string;

  person: Person;
  constructor() {
    this.person = new Person(this.firstName, this.lastName);
  }
  changeToUppercase(value: string): string {
    return value.toUpperCase();
  }
}
