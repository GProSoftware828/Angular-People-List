import { People, PeopleType } from './People';
import {
  Component,
  Input,
  OnInit,
  OnChanges,
  OnDestroy,
  DoCheck,
  AfterContentInit,
  AfterContentChecked,
  AfterViewInit,
  AfterViewChecked
} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  ngOnChanges() {
    console.log('ngOnChanges Fired');
  }

  ngOnInit() {
    console.log('ngOnInit Fired');
  }

  ngOnDestroy() {
    console.log('ngOnDestroy Fired');
    alert('destroy');
  }

  ngDoCheck() {
    console.log('ngDoCheck Fired');
  }

  ngAfterContentInit() {
    console.log('ngAfterContentInit Fired');
  }

  ngAfterContentChecked() {
    console.log('ngAfterContentChecked Fired');
  }

  ngAfterViewInit() {
    console.log('ngAfterViewInit Fired');
  }

  ngAfterViewChecked() {
    console.log('ngAfterViewChecked Fired');
  }

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

  //data binding:
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
  keys = '';
  value = '';
  onKey(evt: any) {
    this.keys += evt.key;
    this.value = evt.target.value;
  }

  onKey1(value) {
    //this.value = value;
    alert(value);
  }

  fName = 'Steve';
  lName = 'S';
  ffName = 'Fran';
  flName = 'S';

  fontSize = 10;
  isSpecial = true;

  canIncrease = true;
  canUpdate = true;
  canModify = true;

  setClasses() {
    let classes = {
      fontBig: this.canIncrease,
      backgroundColored: this.canUpdate,
      modified: this.canModify
    };
    return classes;
  }

  setStyles() {
    let styles = {
      'font-size': this.canIncrease ? '24px' : '10px',
      'background-color': this.canUpdate ? 'lightgreen' : 'white',
      'font-style': this.canModify ? 'italic' : 'normal'
    };
    return styles;
  }

  alert = AlertSuccessComponent;

  changeComponent() {
    if (this.alert == AlertFailureComponent) this.alert = AlertSuccessComponent;
    else this.alert = AlertFailureComponent;
  }

  // onMouse(evt: any) {
  //   if (evt.type == 'mouseover')
  //     evt.target.src = '../../images/Nosedives_copy.jpeg';
  //   else
  //     evt.target.src = '/Images/CremornePoint1_copy.JPG';
  // }
}
//destructuring:
let input = [1, 2];
// let first: number = input[0];
// let second: number = input[1];
let [first, second] = input;
alert(first + ' ' + second);

//spread:
let [n1, ...rest] = [1, 2, 3, 4, 5];
alert(n1);
alert(rest);

//let [m1] = [1,2,3,4], m1 only gets 1;
//let [, , m3, m4] = [1,2,3,4,5,6], gets 3,4;
let [totalDate, year, month, day] = /^(\d\d\d\d)-(\d\d)-(\d\d)$/.exec(
  '2019-11-05'
);
alert(totalDate + ' ' + year + ' ' + month + ' ' + day);

@Component({
  selector: 'alert-success',
  template: `
    <p>This is success</p>
  `
})
export class AlertSuccessComponent {}

@Component({
  selector: 'alert-failure',
  template: `
    <p>This is failure</p>
  `
})
export class AlertFailureComponent {}
