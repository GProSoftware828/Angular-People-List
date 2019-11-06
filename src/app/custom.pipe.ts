import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'age'
})
export class AgePipe implements PipeTransform {
  transform(value: Date): string {
    let todayOffset = new Date().getTime();
    let parDateOffset = value.getTime();
    let difference = todayOffset - parDateOffset;
    //convert from milliseconds:
    let oneDay = 1000 * 60 * 60 * 24;
    let years = Math.floor(difference / (oneDay * 365));
    return years + ' Years';
  }
}
