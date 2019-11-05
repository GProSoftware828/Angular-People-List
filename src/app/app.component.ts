import { Component } from '@angular/core';
import { People, PeopleType } from './People';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  PeopleListSelected: boolean = true;
  personName: string = 'User 1';
  isAvail = true;
  Person1: string = 'User One';
  PeopleList: People[] = [
    new People(1, 'Geo', 10450, PeopleType.Permanent),
    new People(2, 'Ryan', 10030, PeopleType.Contract),
    new People(3, 'Jenny', 10001, PeopleType.Temporary),
    new People(4, 'Hannah', 10070, PeopleType.Permanent),
    new People(5, 'Josh', 10002, PeopleType.Temporary)
  ];
  SelectedPeopleList: People = this.PeopleList[2];
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

  eventType = '';

  onClick() {
    alert('Clicked');
  }

  onMouseOver(evt: any) {
    evt.target.src = '../../images/Nosedives_copy.jpeg';
    this.eventType = evt.type;
  }

  onMouseOut(evt: any) {
    evt.target.src = '/Images/CremornePoint1_copy.JPG';
    this.eventType = evt.type;
  }

  // onMouse(evt: any) {
  //   if (evt.type = 'mouseover')
  //     evt.target.src = '../../images/Nosedives_copy.jpeg';
  //   else
  //     evt.target.src = '/Images/CremornePoint1_copy.JPG';
  // }
}
