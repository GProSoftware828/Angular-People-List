import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { personForm } from './form-person';

@Component({
  selector: 'person-form',
  templateUrl: './personForm.html'
})
export class FormComponent implements OnInit {
  person: personForm;
  firstName: FormControl;
  lastName: FormControl;
  personForm: FormGroup;

  degrees = ['BA', 'BS', 'AS', 'PHD', 'Certifications'];
  gender: FormControl;
  qualification: FormControl;

  ngOnInit(): void {
    this.person = new personForm();
    this.person.firstName = 'Jane';
    this.person.lastName = 'Blow';
    this.person.gender = 'female';
    this.person.qualification = 'Certifications';
    this.createFormControls();
    this.createForm();

    this.personForm.setValue({
      firstName: this.person.firstName,
      lastName: this.person.lastName,
      gender: this.person.gender,
      qualification: this.person.qualification
    });
  }

  createFormControls() {
    this.firstName = new FormControl('Joe');
    this.lastName = new FormControl('Blow');
    this.gender = new FormControl('male');
    this.qualification = new FormControl('Certifications');
  }

  createForm() {
    this.personForm = new FormGroup({
      firstName: this.firstName,
      lastName: this.lastName,
      gender: this.gender,
      qualification: this.qualification
    });
  }
}
