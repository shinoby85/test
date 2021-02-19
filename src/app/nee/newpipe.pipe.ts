import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'newpipe'
})
export class NewpipePipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return null;
  }

}
