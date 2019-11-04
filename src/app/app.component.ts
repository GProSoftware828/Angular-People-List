import { Component } from '@angular/core';
import { People } from './People';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  PeopleListSelected: boolean = true;
  Person1: string = 'User One';
  PeopleList: People[] = [
    new People(1, 'Geo', 10450),
    new People(2, 'Ryan', 10030),
    new People(3, 'Jenny', 10001),
    new People(4, 'Hannah', 10070),
    new People(5, 'Josh', 10002)
  ];
  Person2: string = 'User Two';
  Duration: number = 7;
  PeopleCategories: string[] = [
    'Passerby',
    'Family',
    'Friend',
    'Enemy',
    'Competitor',
    'Stranger',
    'Teammate'
  ];
  CurrentTime: string = new Date().toLocaleTimeString();
}
