import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'breakLines'
})
export class BreakLines implements PipeTransform {
  transform(value: string, ...args: Array<any>): string {
    if (value) {
      return value.replace(/\n/g, '<br>');
    }

    return value;
  }
}
