import { Inject, Injectable } from '@angular/core';

@Injectable() //use without @Inject in constructor- same
export class Address {}

@Injectable()
export class Addresses {
  location: string = 'addresses';
}

@Injectable()
export class Subjects {}

export class Students {
  address: Address;
  subjects: Subjects;
  constructor(
    @Inject(Address) address: Address,
    @Inject(Subjects) subjects: Subjects
  ) {
    this.address = address;
    this.subjects = subjects;
  }
}
