import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'join',
  pure: false //less performant but automatic updates from events
})
export class JoinPipe implements PipeTransform {
  transform(value: any): string {
    return value.join(',');
  }
}
