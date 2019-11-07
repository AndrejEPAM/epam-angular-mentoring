import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'duration'
})
export class DurationPipe implements PipeTransform {

  transform(minutes: number): any {
    if (minutes > 60) {
      const m = minutes % 60;
      const hour = (minutes - m) / 60;
      return `${hour}h ${m}m`;
    } else {
      return `${minutes}m`;
    }
  }


}
