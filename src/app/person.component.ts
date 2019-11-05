import { Component } from '@angular/core';
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
      <input type="text" name="lastName" [(ngModel)]="person.lastName" /><br />
    </form>
    Hello {{ person.firstName + ' ' + person.lastName }}
  `
})
export class PersonComponent {
  person: Person = new Person('Steve', 'S');
}
