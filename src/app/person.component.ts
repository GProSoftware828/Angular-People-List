import { Component } from '@angular/core';
import { Person } from './Person';

@Component({
  selector: 'person-component',
  template: `
    <form>
      First Name: <input type="text" [value]="person.firstName" /><br />
      Last Name: <input type="text" [value]="person.lastName" /><br />
    </form>
  `
})
export class PersonComponent {
  person: Person = new Person('Steve', 'S');
}
