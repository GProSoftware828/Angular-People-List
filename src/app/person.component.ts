import { Component } from '@angular/core';
import { Person } from './Person';

@Component({
  selector: 'person-component',
  template: `
    <form>
      First Name:
      <input
        type="text"
        [value]="person.firstName"
        (input)="person.firstName = $event.target.value"
      /><br />
      Last Name:
      <input
        type="text"
        [value]="person.lastName"
        #lastName
        (input)="person.lastName = lastName.value"
      /><br />
    </form>
    Hello {{ person.firstName + ' ' + person.lastName }}
  `
})
export class PersonComponent {
  person: Person = new Person('Steve', 'S');
}
