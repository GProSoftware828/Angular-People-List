import { Component, OnInit } from '@angular/core';
import {
  FormGroup,
  FormControl,
  Validators,
  FormBuilder
} from '@angular/forms';
import { personForm } from './form-person';
import { Observable, fromEvent } from 'rxjs';
import { debounceTime, map, distinctUntilChanged } from 'rxjs/operators';

@Component({
  selector: 'person-form',
  templateUrl: './personForm.html'
})
export class FormComponent implements OnInit {
  constructor(private fb: FormBuilder) {}

  person: personForm;
  changes: string[] = [];
  firstName: FormControl;
  lastName: FormControl;
  personForm: FormGroup;

  degrees = ['BA', 'BS', 'AS', 'PHD', 'Certifications'];
  gender: FormControl;
  qualification: FormControl;
  message = '';

  ngOnInit(): void {
    this.person = new personForm();
    this.person.firstName = 'Jane';
    this.person.lastName = 'Blow';
    this.person.gender = 'female';
    this.person.qualification = 'Certifications';
    this.createFormControls();
    this.createForm();

    // this.personForm = this.fb.group({
    //   firstName: [
    //     'Joe',
    //     [Validators.required, Validators.pattern('[a-zA-Z0-9]+')]
    //   ],
    //   lastName: [
    //     'Bloe',
    //     [Validators.required, Validators.pattern('[a-zA-Z0-9]+')]
    //   ],
    //   gender: ['male'],
    //   qualification: ['Certifications']
    // });

    // this.personForm.get('firstName'.valueChanges.debounceTime(500).distinctUntilChanged().
    //   this.changes.push(change);

    this.personForm.setValue({
      firstName: this.person.firstName,
      lastName: this.person.lastName,
      gender: this.person.gender,
      qualification: this.person.qualification
    });
  }

  createFormControls() {
    this.firstName = new FormControl('Joe', [
      Validators.required,
      Validators.pattern('[a-zA-Z0-9 ]+')
    ]);
    const output = document.getElementById('firstName');
    const keyup$ = fromEvent(output, 'keyup');
    keyup$
      .pipe(
        map((i: any) => i.currentTarget.value),
        debounceTime(500),
        distinctUntilChanged()
      )
      .subscribe(change => {
        this.changes.push(change);
      });
    this.lastName = new FormControl('Blow', [
      Validators.required,
      Validators.pattern('[a-zA-Z0-9 ]+')
    ]);
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

  onSubmit(form: any) {
    if (this.personForm.valid) {
      this.message = 'Form is valid';
    } else {
      this.message = 'Form is invalid';
    }
  }
}
