import {Pipe, PipeTransform} from '@angular/core';

@Pipe({name: 'vlahioSplitUcWords'})
export class SplitUcWordsPipe implements PipeTransform {
  transform(
    value: string
  ): string {
    return value.split(/(?=[A-Z])/)
      .join(' ').toLowerCase()
      .replace(/\b[a-z]/g,
        (letter) => letter.toUpperCase()
      );
  }
}
