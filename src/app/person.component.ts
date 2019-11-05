import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Person } from './Person';

@Component({
  selector: 'person-component',
  template: `
    <form>
      First Name:
      <input
        type="text"
        name="firstName1"
        [ngModel]="firstName1"
        (ngModelChange)="changeFirstFormFirst($event)"
      /><br />
      Last Name:
      <input
        type="text"
        name="lastName1"
        [ngModel]="lastName1"
        (ngModelChange)="changeFirstFormLast($event)"
      /><br />
    </form>
    Hello {{ firstName1 + ' ' + lastName1 }}
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
  //get data from parent component in the child:
  @Input() firstName: string;
  @Input() lastName: string;
  @Input() firstName1: string;
  @Input() lastName1: string;

  //pass data from child component to the parent:
  @Output() firstNameChange = new EventEmitter<string>();
  @Output() lastNameChange = new EventEmitter<string>();

  @Output() formFirstChangeFirst = new EventEmitter<string>();
  @Output() formFirstChangeLast = new EventEmitter<string>();

  changeFirstName(fn: string) {
    this.firstName = fn;
    this.firstNameChange.emit(fn);
  }

  changeLastName(ln: string) {
    this.lastName = ln;
    this.lastNameChange.emit(ln);
  }

  changeFirstFormFirst(fnf: string) {
    this.firstName1 = fnf;
    this.formFirstChangeFirst.emit(fnf);
  }

  changeFirstFormLast(lnl: string) {
    this.lastName1 = lnl;
    this.formFirstChangeLast.emit(lnl);
  }

  person: Person;
  constructor() {
    this.person = new Person(this.firstName, this.lastName);
  }
  changeToUppercase(value: string): string {
    return value.toUpperCase();
  }
}
